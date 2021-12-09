const fs = require('fs')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const options = {
    pretendToBeVisual: true,
    resources: "usable",
    runScripts: "dangerously",
};

const fetch_js = `<script type="module">${fs.readFileSync('./fetch/fetch.umd.js', 'utf-8')}</script>`

function render(html, url) {
    // TODO is it passed correctly
    const jsdom_console = new jsdom.VirtualConsole();
    jsdom_console.sendTo(console);
    html_fix = html.replace('<head>', `<head>\n${fetch_js}`)
    // console.log(html_fix)
    dom = new JSDOM(html_fix, {...options, ...{"url": url, jsdom_console}})
    rendered_html = dom.serialize();
    return rendered_html
}

module.exports = {
    render: render,
};
