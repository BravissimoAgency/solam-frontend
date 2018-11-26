const axios = require('axios');
const fs = require('fs');
const ef = require('empty-folder');
const siteConfig = require('../utils/config');

const { baseUrl, apiUrl } = siteConfig;

async function generatePages(dir) {
    const res = await axios.get(`${apiUrl}/api/page`);
    res.data.forEach((page) => {
        let name = page.post_link.replace(baseUrl, '');
        name = name.replace(/\//g, '-_-');
        name = name.replace(/\\/g, '-_-');
        const path = `${dir}/${name}.json`;
        fs.writeFile(path, JSON.stringify(page), (err) => {
            if (err) throw err;
        });
    });
}

async function generateMenu(dir) {
    const res = await axios.get(`${apiUrl}/api/menus/primary`);

    const path = `${dir}/menu.json`;
    fs.writeFile(path, JSON.stringify(res.data), (err) => {
        if (err) throw err;
    });
}

export default async function generateJsonFiles(dir) {
    return Promise.all([generatePages(dir), generateMenu(dir)]);
}

async function init(dir) {
    ef(dir, false, (feedback) => {
        if (!feedback.error) {
            console.log('Starting generating JSON files');
        }
    });

    await generateJsonFiles(dir);

    console.log('Done generating JSON files');

    return true;
}

module.exports = function () {
    this.nuxt.hook('generate:before', async generator => init(generator.nuxt.options.generate.apiCacheDir));
};
