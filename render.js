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
const render_wait = 5000

function render(html, url) {
    // TODO is it passed correctly
    const jsdom_console = new jsdom.VirtualConsole();
    jsdom_console.sendTo(console);
    html_fix = html.replace('<head>', `<head>\n${unfetch}`)
    // console.log(html_fix)
    dom = new JSDOM(html_fix, {...options, ...{"url": url, virtualConsole: jsdom_console}})
    timer(render_wait).then(_=>console.log("rendering ok"));
    rendered_html = dom.serialize();
    return rendered_html
}

module.exports = {
    render: render,
};
