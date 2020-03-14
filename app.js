require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const user = require('./routes/users')
const cors = require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/v1/users', user)


app.listen(process.env.PORT, ()=>{
  if(process.env.NODE_ENV === 'development'){
    console.log(`Server start ${process.env.PORT}`)
  }
})