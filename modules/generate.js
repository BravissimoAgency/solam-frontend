const axios = require('axios');
const fs = require('fs');
const ef = require('empty-folder');
const siteConfig = require('../utils/config');
const https = require("https");

const agent = new https.Agent({
    rejectUnauthorized: false
});

const { baseUrl, apiUrl } = siteConfig;

async function generatePages(dir) {
    const res = await axios.get(`${apiUrl}/api/page`, { httpsAgent: agent });
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
    const res = await axios.get(`${apiUrl}/api/menus/primary`, { httpsAgent: agent });

    const path = `${dir}/menu.json`;
    fs.writeFile(path, JSON.stringify(res.data), (err) => {
        if (err) throw err;
    });
}

async function generateOptions(dir) {
    const res = await axios.get(`${apiUrl}/api/options`, { httpsAgent: agent });

    const path = `${dir}/options.json`;
    fs.writeFile(path, JSON.stringify(res.data), (err) => {
        if (err) throw err;
    });
}

async function generateProducts(dir) {
    const res = await axios.get(`${apiUrl}/api/product`, { httpsAgent: agent });

    const path = `${dir}/products.json`;
    fs.writeFile(path, JSON.stringify(res.data), (err) => {
        if (err) throw err;
    });
}

async function generateShortcuts(dir) {
    const res = await axios.get(`${apiUrl}/api/shortcut`, { httpsAgent: agent });

    const path = `${dir}/shortcuts.json`;
    fs.writeFile(path, JSON.stringify(res.data), (err) => {
        if (err) throw err;
    });
}

async function generateApplications(dir) {
    const res = await axios.get(`${apiUrl}/api/application`, { httpsAgent: agent });

    const path = `${dir}/applications.json`;
    fs.writeFile(path, JSON.stringify(res.data), (err) => {
        if (err) throw err;
    });
}

export default async function generateJsonFiles(dir) {
    return Promise.all([
        generatePages(dir), 
        generateMenu(dir),
        generateOptions(dir),
        generateProducts(dir),
        generateShortcuts(dir),
        generateApplications(dir),
    ]);
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
