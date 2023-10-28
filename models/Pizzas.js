const { boolean } = require('joi')
const mongoose = require('mongoose')

const PizzaSchema = mongoose.Schema({

    cheese:{
        type:boolean,
        required:true
    },
    vegan:{
        type:boolean,
        required:true
    }

})

module.exports = mongoose.model('pizzas',PizzaSchema)