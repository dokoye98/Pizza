//const { boolean } = require('joi')
const mongoose = require('mongoose')

const PizzaSchema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    cheese:{
        type:Boolean,
        required:true
    },
    vegan:{
        type:Boolean,
        required:true
    }

})

module.exports = mongoose.model('pizzas',PizzaSchema)