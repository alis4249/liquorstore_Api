const express = require('express');
const router =express.Router();
const harddrink = require('../models/HardDrink')
const auth = require('../auth');

router.post('/harddrink',(req,res,next)=>{
    harddrink.create({
        itemname:req.body.itemname,
        price:req.body.price,
        detail:req.body.detail,
        image:req.body.image
    }).then((callbacks)=>{
        res.json( {status:"HardDrinks Added successfully",callback:callbacks});
        console.log(callbacks);
    }).catch(next);

});

router.get('/all',(req,res,next)=>{
    harddrink.find({})
   .then((callbacks)=>{
       res.json(callbacks);
   }).catch(next)
});
module.exports=router;