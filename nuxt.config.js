import generateJsonFiles from './modules/generate';

const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');
const path = require('path');
const axios = require('axios');

const siteConfig = require('./utils/config');

const { baseUrl, apiUrl } = siteConfig;

function getRoutes() {
    const pages = axios
        .get(`${apiUrl}/wp/v2/pages`)
        .then(res => res.data.map(item => item.link.replace(baseUrl, '')));
    return Promise.all([pages]).then(values => values.join().split(','));
}

class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-z0-9-:/]+/g) || [];
    }
}

module.exports = {
    mode: 'universal',

    /*
     ** Headers of the page
     */
    head: {
        htmlAttrs: {
            lang: 'en',
        },
        title: 'Solam',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
        ],
        link: [
            { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
            { rel: 'dns-prefetch', href: '//wp.solam.com' },
            { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        ],
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#13498e' },

    /*
     ** Global CSS
     */
    css: ['@/assets/css/tailwind.css', '@/assets/css/main.css'],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '~/plugins/polyfills', ssr: false },
        '~/plugins/app-link',
        '~/plugins/app-image',
        { src: '~/plugins/vue2-google-maps', ssr: false },
        { src: '~/plugins/v-click-outside', ssr: false },
        { src: '~/plugins/gtm', ssr: false },
        { src: '~/plugins/cookie-consent', ssr: false },
        '~/plugins/portal-vue',
    ],

    modules: [
        '@nuxtjs/sitemap',
        '@/modules/generate',
    ],

    sitemap: {
        generate: true,
        hostname: baseUrl,
        routes() {
            return getRoutes();
        },
    },

    generate: {
        fallback: true,
        apiCacheDir: 'static/json/',
        routes() {
            return getRoutes();
        },
    },

    /*
     ** Build configuration
     */
    build: {
        extractCSS: true,
        optimization: {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.(css|vue)$/,
                        chunks: 'all',
                        enforce: true,
                    },
                },
            },
        },
        extend(config, { isDev, isClient }) {
            if (isDev) {
                generateJsonFiles('static/json/');
            }
            /* eslint-disable */
            for (const rule of config.module.rules) {
                if (rule.test.test('.css')) {
                    config.module.rules.push({
                        test: /\.postcss/,
                        oneOf: rule.oneOf,
                    });
                }
            }
            
            if (!isDev) {
                // Remove unused CSS using purgecss. See https://github.com/FullHuman/purgecss
                // for more information about purgecss.
                config.plugins.push(
                    new PurgecssPlugin({
                        paths: glob.sync([
                            path.join(__dirname, './pages/**/*.vue'),
                            path.join(__dirname, './layouts/**/*.vue'),
                            path.join(__dirname, './components/**/*.vue'),
                        ]),
                        extractors: [
                            {
                                extractor: TailwindExtractor,
                                extensions: ['vue'],
                            },
                        ],
                        whitelistPatterns: [],
                        whitelist: ['html', 'body', 'nuxt-progress', 'vue-map'],
                    }),
                );
            }

            return config;
        },
    },
};
