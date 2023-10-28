const express = require('express')
const router = express()
const Pizza = require('../models/Pizzas')
const verifytoken = require('../verifytoken')

router.get('/',verifytoken,async(req,res)=>{
    try{
        const pizza = await Pizza.find()
        res.send(pizza)
    }catch(err){
        res.send({message:err})
    }
})

module.exports = router