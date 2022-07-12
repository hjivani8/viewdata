const mongoose = require('mongoose');

const viewschema = mongoose.Schema({

    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:Number
    }

});

const user = mongoose.model('user',viewschema);

module.exports = user;