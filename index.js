const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    const p = Date.now();
    ctx.body = 'Hello World' + '\n\n' + p
})


app.listen(30000)