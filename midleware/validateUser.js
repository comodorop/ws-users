const  Schema =  require('validate')
module.exports = function(req, resp, next){
  let {body} = req
  const user = new Schema({
  first_name: {
    type: String,
    required: true,
    message: 'Its require a name'
  },
  last_name: {
    type: String,
    required: true,
    message: 'Its require last name'
  },
  email: {
    type: String,
    required: true,
    message: 'its requiere an email'
  },
  city: {
    type: String,
    required: true,
    message: 'its require a city'
  }
})
  const error = user.validate(body)
  if(error.length > 0){
    resp.status(401).send({msg: error[0].message})
    console.log(error[0].message)
  }else{
    next()
  }
}