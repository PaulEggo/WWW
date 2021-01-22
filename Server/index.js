const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')
const { urlencoded } = require('body-parser')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'quinnshopdatabase',
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/get', (req, res) => {
    const sqlSelectAll = 'SELECT * FROM item'
    db.query(sqlSelectAll, (err, result) => {
        res.send(result)
    })
})

app.listen(3001, () => {})
