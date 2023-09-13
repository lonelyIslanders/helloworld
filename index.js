const Koa = require('koa')
const ethers = require('ethers');

const app = new Koa()
const PORT = 4000


app.use(async ctx => {
    const p = Date.now();
    ctx.body = 'API RUNNING🥳~~~~~~~' + '\n\n' + p
})

app.listen(30000)

module.exports = app