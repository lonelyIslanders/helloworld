const express = require('express')
const ethers = require('ethers')
const TronWeb = require('tronweb')

const app = express()



app.get('/', (req, res) => {
    const address = req.query.address;
    if (address) {
        const beg = address.substring(0, 1)
        if (beg == '0') {
            res.send({ code: 0, msg: ethers.utils.isAddress(address) });
            return
        }
        if (beg == 'T') {
            res.send({ code: 0, msg: TronWeb.isAddress(address) })
            return
        }
        res.send({ code: 0, msg: '请传入一个有效地址' })
    } else {
        res.send({ code: 400, msg: "请携带address" })
    }
})

app.listen(30000, () => {
    console.log('run at 30000')
})