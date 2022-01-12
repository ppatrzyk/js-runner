const koa = require('koa');
const parse = require('co-body');
const { render } = require('./render.js');

const app = new koa();

// response
app.use(async ctx => {
  if (ctx.path == '/render' & ctx.method == 'POST') {
    var opts = {limit: '10mb', strict: false};
    var req_body = await parse.json(ctx.request, opts);
    body = await render(req_body)
    ctx.body = body; 
  } else {
    ctx.throw(404)
  }
});

app.listen(3000);
