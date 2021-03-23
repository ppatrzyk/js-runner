const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function render(url) {
    (async () => {
        console.log(url);
        dom = await JSDOM.fromURL(url, {})
        html = dom.serialize();
        console.log(html)
    })();
}

render("https://ppatrzyk.github.io/foreign-tourists");
