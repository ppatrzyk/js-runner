const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const options = {
    pretendToBeVisual: true,
    runScripts: "outside-only",
};

function render(html, scripts) {
    dom = new JSDOM(html, options)
    scripts.forEach(script => {
        dom.window.eval(script);
    });
    rendered_html = dom.serialize();
    console.log(rendered_html)
}

render(`<!DOCTYPE html><p>Hello world</p>`, ['document.body.appendChild(document.createElement("hr"));']);
