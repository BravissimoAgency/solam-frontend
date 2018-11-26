const join = require("path").join;
const postcssPresetEnv = require('postcss-preset-env');
const tailwindJS = join(__dirname, "tailwind.js");
const calc = require("postcss-calc");

module.exports = {
    plugins: [
        postcssPresetEnv({
            stage: 0,
            preserve: false,
            importFrom: 'assets/css/variables.css',
        }),
        calc(),
        require("tailwindcss")(tailwindJS), 
        require("autoprefixer")
    ]
};
