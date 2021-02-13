const express = require('express');
const router =express.Router();
const Beers = require('../models/Beer')
const auth = require('../auth');

router.post('/beer',(req,res,next)=>{
    Beers.create({
        itemname:req.body.itemname,
        price:req.body.price,
        detail:req.body.detail,
        image:req.body.image
    }).then((callbacks)=>{
        res.json( {status:"Beer successfully Added",callback:callbacks});
        console.log(callbacks);
    }).catch(next);

});

router.get('/all',(req,res,next)=>{
   Beers.find({})
   .then((callbacks)=>{
       res.json(callbacks);
   }).catch(next)
});
module.exports=router;