const koa = require('koa');
const koa_body = require('koa-body');

const app = new koa();
app.use(koa_body());

// response
app.use(ctx => {
  if (ctx.path == '/render' & ctx.method == 'POST') {
    console.log(ctx.request);
    console.log(ctx.request.body);
    ctx.body = 'Hello Koa'; 
  } else {
    ctx.throw(404)
  }
});

app.listen(3000);
