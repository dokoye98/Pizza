//one import the joi for validation of schema

const joi = require('joi')


//for now there will be a signup validation and login validation
//each require a joi object

const signUpValidation = (data)=>{
    //the validation will follow a similar naming scheme because it is a schema validation
    const schemaValidation = joi.object({
       
        firstname:joi.string().required().min(6).max(256),
        lastname:joi.string().required().min(6).max(256),
        username:joi.string().required().min(6).max(256),
        email:joi.string().required().min(6).max(256).email(),
        password:joi.string().required().min(6).max(256)
    })
    return schemaValidation.validate(data)
}

//the login validation will be different as it will only require the username and password

const loginValidation = (data)=>{
    const schemaValidation = joi.object({

        username:joi.string().required().min(6).max(256),
        password:joi.string().required().min(6).max(256)
    })
    return schemaValidation.validate(data)
}

module.exports.signUpValidation = signUpValidation
module.exports.loginValidation = loginValidation