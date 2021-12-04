const fs = require('fs')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const options = {
    pretendToBeVisual: true,
    resources: "usable",
    runScripts: "dangerously",
};

const fetch_js = `<script type="module">${fs.readFileSync(require.resolve('whatwg-fetch/fetch.js'), 'utf-8')}</script>`

function render(html, url) {
    html_fix = html.replace('<head>', `<head>\n${fetch_js}`)
    // console.log(html_fix)
    dom = new JSDOM(html_fix, {...options, ...{"url": url}})
    rendered_html = dom.serialize();
    return rendered_html
}

module.exports = {
    render: render,
};
