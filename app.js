const assert = require('assert');
const koa = require('koa');
const parse = require('co-body');
const { render } = require('./render.js');

const app = new koa();

// response
app.use(async ctx => {
  if (ctx.path == '/render' & ctx.method == 'POST') {
    var start = Date.now();
    var opts = {limit: '100Mb', strict: false};
    var req_body = await parse.json(ctx.request, opts);
    // todo maybe cookies in the future
    // https://github.com/jsdom/jsdom#cookie-jars
    ["html", "url", "user_agent", "render_wait"].forEach(key => {
      assert(req_body.hasOwnProperty(key));
    });
    req_body.start_time = start;
    body = await render(req_body)
    ctx.body = body; 
  } else {
    ctx.throw(404)
  }
});

app.listen(3000);
