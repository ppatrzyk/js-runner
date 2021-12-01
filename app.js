const koa = require('koa');
const koa_body = require('koa-body');
const { render } = require('./render.js');

const app = new koa();
app.use(koa_body());

// response
app.use(ctx => {
  if (ctx.path == '/render' & ctx.method == 'POST') {
    html = ctx.request.body.html
    scripts = ctx.request.body.scripts
    body = render(html, scripts)
    ctx.body = body; 
  } else {
    ctx.throw(404)
  }
});

app.listen(3000);
