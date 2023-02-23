const Koa = require('koa')

const app = new Koa()
const PORT = 4000

app.use(async ctx => {
    const p = Date.now();
    ctx.body = '我是你爹' + '\n\n' + p
})
// app.listen(PORT, () => {
//     console.log(`API listening on PORT ${PORT} `)
// })

// app.get('/', (req, res) => {
//     res.send('Hey this is my API running 🥳')
// })

// app.get('/about', (req, res) => {
//     res.send('This is my about route..... ')
// })
module.exports = app