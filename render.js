const fs = require('fs')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const const_options = {
    pretendToBeVisual: true,
    resources: "usable",
    runScripts: "dangerously",
};

// https://github.com/developit/unfetch
const unfetch = fs.readFileSync('./unfetch-4.2.0.js', 'utf-8')

// https://stackoverflow.com/a/46937705
const timer = ms => new Promise( res => setTimeout(res, ms));

async function render(params) {
    const resource_loader = new jsdom.ResourceLoader({strictSSL: false, userAgent: params.user_agent});
    const jsdom_console = new jsdom.VirtualConsole();
    jsdom_console.sendTo(console);
    options = {
        ...const_options,
        ...{
            url: params.url,
            resources: resource_loader,
            virtualConsole: jsdom_console,
            beforeParse(window) {
                window.eval(unfetch)
            }
        }
    }
    dom = new JSDOM(params.html, options)
    await timer(params.render_wait)
    rendered_html = dom.serialize();
    return rendered_html
}

module.exports = {
    render: render,
};
