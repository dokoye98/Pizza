//Library import

const express = require('express')
const {restart} = require('nodemon')
const mongoose = require('mongoose')
require('dotenv/config')
const bodyParser = require('body-parser')
const app = express()
const authRouter = require('./routes/auth')
//MiddleWare - bodu-parser must come before the routers 
app.use(bodyParser.json())
app.use('/api',authRouter)



//mongoose connector with the access key hidden
mongoose.connect(process.env.DB_CONNECTOR).then(()=>{
    console.log('The oven is working')
})

app.listen(3000,()=>{
    console.log('The Kitchen is open for business')
})
