const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const options = {
    resources: "usable",
    runScripts: "dangerously",
};

function render(url) {
    (async () => {
        console.log(url);
        dom = await JSDOM.fromURL(url, options)
        html = dom.serialize();
        console.log(html)
    })();
}

render("https://ppatrzyk.github.io/foreign-tourists");
