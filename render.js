const fs = require('fs')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const options = {
    pretendToBeVisual: true,
    runScripts: "outside-only",
};

const fetch_js = fs.readFileSync(require.resolve('whatwg-fetch/fetch.js'), 'utf-8')

function render(html, scripts) {
    dom = new JSDOM(html, options)
    [fetch_js].concat(scripts).forEach(script => {
        dom.window.eval(script);
    });
    rendered_html = dom.serialize();
    return rendered_html
}

module.exports = {
    render: render,
};
