const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const options = {
    pretendToBeVisual: true,
    runScripts: "outside-only",
};

function render(html, scripts) {
    dom = new JSDOM(html, options)
    rendered_html = dom.serialize();
    console.log(rendered_html)
}

render(`<!DOCTYPE html><p>Hello world</p>`, []);
