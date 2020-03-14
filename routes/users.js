const express = require('express')
const routes = express.Router()
let lstData = require('../repository/data')
const middleware = require('../midleware/validateUser')

routes.get('/', (req, resp)=>{
  let {search}= req.query
  let info = lstData.filter(el => {
    delete el._id
    delete el.age
    delete el.index
    delete el.company
    delete el.phone
    return el.first_name.toLowerCase().includes(search.toLowerCase()) 
    || el.last_name.toLowerCase().includes(search.toLowerCase())
    || el.email.toLowerCase().includes(search.toLowerCase())
    || el.city.toLowerCase().includes(search.toLowerCase())
  })
  resp.status(200).send({count: info.length, data: info})
})

routes.post('/', middleware, (req, resp)=>{
  let {body} = req
  lstData.push(body)
  console.log("Se ha guardado")
  resp.status(201).send({msg: 'New record avaliable'})
})


module.exports = routes