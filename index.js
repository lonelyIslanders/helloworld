const express = require('express')
const ethers = require('ethers')

// const cors = require('cors')

const app = express()

// app.use(cors())


app.get('/', (req, res) => {
    const address = req.query.address;
    if (address) {
        res.send({ code: 0, msg: ethers.utils.isAddress(address) })
    } else {
        res.send({ code: 400, msg: "请携带address！" })
    }
})

app.listen(30000, () => {
    console.log('run at 3000')
})