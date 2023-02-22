const Koa = require('koa')
const app = new Koa();

app.use(async ctx => {
    const ti = Date.now();
    ctx.body = 'Hello World' + '\n' + ti;
})

app.listen(30000)