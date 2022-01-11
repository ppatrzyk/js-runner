const koa = require('koa');
const koa_body = require('koa-body');
const { render } = require('./render.js');

const app = new koa();
app.use(koa_body());

// response
app.use(async ctx => {
  if (ctx.path == '/render' & ctx.method == 'POST') {
    html = ctx.request.body.html
    url = ctx.request.body.url
    body = await render(html, url)
    ctx.body = body; 
  } else {
    ctx.throw(404)
  }
});

app.listen(3000);
