const express = require('express')
const router = express()
const User = require('../models/Users')
const {signUpValidation, loginValidation} = require('../validation/validation')
// used for encryption in this case it will be used for not only password but first and last name encryption
const bcryptjs = require('bcryptjs')
//once everything is set up this will be used for authentication keys
const jsonwebtoken = require('jsonwebtoken')



router.post('/signup',async(req,res)=>{
    const {error} = (signUpValidation(req.body))
    const presentChecker = await User.findOne({email:req.body.email})
    if(error){
        return res.status(400).send({message:error["details"][0]["message"]})

        //console.log(error["details"][0]["message"])
}
//next validation will be checking for accounts using the same emails as people can have the same first and last names
if(presentChecker ){
   return res.status(400).send({message:'User already exists'})
   //res.sta
}
//first and last names are hidden as well as password 

const salt = await bcryptjs.genSalt(5)
const hashedFirstName = await bcryptjs.hash(req.body.firstname,salt)
const hashedLastName =  await bcryptjs.hash(req.body.lastname,salt)
const hashedPassword = await bcryptjs.hash(req.body.password, salt)
const dataFormat = new User({
    firstname:hashedFirstName,
    lastname:hashedLastName,
    username:req.body.username,
    email:req.body.email,
    password:hashedPassword
})
try{
    const registerUser = await dataFormat.save()
    res.status(200).send(registerUser)
}catch(err){
    res.status(400).send({message:err})
}


})

router.get('/',async(req,res)=>{
    try{
        const user = await  User.find()
        res.send(user)
    }catch(err){
        res.status(400).send({message:err})
    }
})
module.exports = router