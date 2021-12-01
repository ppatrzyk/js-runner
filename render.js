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
    return endered_html
}

module.exports = {
    render: render,
};
