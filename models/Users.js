//only one library is needed for the schema file
const mongoose = require('mongoose')
//in this schema i decided to add first and last name since its a twitter style social media
const UserSchema = mongoose.Schema({

    FirstName:{
        type:String,
        required:true,
        min:3,
        max:25

    },
    LastName:{
        type:String,
        required:true,
        min:3,
        max:40
    },
    username:{
        type:String,
        required:true,
        min:6,
        max:256
    },
    email:{
        type:String,
        required:true,
        min:6,
        max:256
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:1056
    }


})


//always remember module export - the 'Users' is the name of the collection this will be linked to
module.exports = mongoose.model('Users',UserSchema)
