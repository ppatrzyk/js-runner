const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  if (ctx.path == '/render') {
    console.log(ctx.method);
    console.log(ctx.request);
    ctx.body = 'Hello Koa'; 
  } else {
    ctx.throw(404)
  }
});

app.listen(3000);
