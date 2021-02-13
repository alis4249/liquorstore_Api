const express = require('express');
const router = express.Router();
const cart = require('../models/cart');
const auth = require('../auth');

router.route('/')
.get((req,res,next)=>{
    cart.find()
    .then((cart)=>{
        res.json(cart);
    }).catch(next);
})

.post((req,res,next)=>{
cart.create(req.body)
.then((cart)=>{
    res.json(cart);
}).catch(next);
});

router.route('/:id')
.get((req,res,next)=>{
    cart.findById(req.params.id)
    .then((cart) =>{
    res.json(cart);
}).catch(next);
})

.post((req,res)=>{
    res.send("Not Supported");

})

.delete((req, res, next)=>{
    cart.findByIdAndDelete(req.params.id)
    .then((status)=>{
        res.json(status);
    }).catch(next);
})

module.exports = router;