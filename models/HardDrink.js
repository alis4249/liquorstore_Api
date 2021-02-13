const mongoose = require("mongoose");

const drinkSchema = new mongoose.Schema({
    itemname:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    detail:{
        type:String,
    
    },
    image:{
        type:String
    },
});
module.exports = mongoose.model('HardDrink',drinkSchema);