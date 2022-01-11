const fs = require('fs')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const options = {
    pretendToBeVisual: true,
    resources: "usable",
    runScripts: "dangerously",
};

// https://github.com/developit/unfetch
const unfetch = `<script>${fs.readFileSync('./unfetch-4.2.0.js', 'utf-8')}</script>`

// https://stackoverflow.com/a/46937705
const timer = ms => new Promise( res => setTimeout(res, ms));
const render_wait = 3000

async function render(html, url) {
    const jsdom_console = new jsdom.VirtualConsole();
    jsdom_console.sendTo(console);
    html_fix = html.replace('<head>', `<head>\n${unfetch}`)
    dom = new JSDOM(html_fix, {...options, ...{"url": url, virtualConsole: jsdom_console}})
    await timer(render_wait)
    rendered_html = dom.serialize();
    return rendered_html
}

module.exports = {
    render: render,
};
