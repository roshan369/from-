const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const newSchema = new mongoose.Schema({

    fastname:{
        type: String,
        required: true,
        min:3,
        max:20,
    },

    number: {
        type:String,
        require: true,
        max:10,
        min:10,
    },

    email: {
        type: String,
        required: true,
        max:50,
        unique:true,
    },

    passwored: {
        type: String,
        required: true,
        min:6,
    },

    Gender: {
        type: String,
        require: true,
    }
},
{timestamps:true}
);

module.exports = new mongoose.model("myapp", newSchema);