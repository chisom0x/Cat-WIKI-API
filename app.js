const express = require('express');
const app = express()
const router = require('./catroutes')
const bodyParser = require('body-parser');



app.use(express.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use('/api/catwiki', router)






module.exports = app;
