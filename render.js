const fs = require('fs')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const const_options = {
    pretendToBeVisual: true,
    resources: "usable",
    runScripts: "dangerously",
};

// https://github.com/developit/unfetch
const unfetch = `<script>${fs.readFileSync('./unfetch-4.2.0.js', 'utf-8')}</script>`

// https://stackoverflow.com/a/46937705
const timer = ms => new Promise( res => setTimeout(res, ms));

async function render(params) {
    const jsdom_console = new jsdom.VirtualConsole();
    jsdom_console.sendTo(console);
    params.user_agent
    html_fix = params.html.replace('<head>', `<head>\n${unfetch}`)
    options = {
        ...const_options,
        ...{
            url: params.url,
            virtualConsole: jsdom_console
        }
    }
    dom = new JSDOM(html_fix, options)
    await timer(params.render_wait)
    rendered_html = dom.serialize();
    return rendered_html
}

module.exports = {
    render: render,
};
