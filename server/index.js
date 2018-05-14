const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const userRouter = require('./user')
const personRouter = require('./person')
const checkToken = require('./check_token')

const app = express()
app.use(cookieParser())
app.use(bodyParser.json())

app.use('/api',userRouter)
app.use('/api',checkToken,personRouter)
app.listen(9093, function() {
    console.log('Node app start at port 9093')
});