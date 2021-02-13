const mongoose = require ('mongoose');
const cartSchema = new mongoose.Schema({
username: {
    type: String,
    required: true
},
product_name:{
    type:String,
    required:true
},
cost: {
    type: String,
    required: true
},
image: {
    type:String,
    required:false
},


},{timestamps:true});

module.exports = mongoose.model('cart', cartSchema);