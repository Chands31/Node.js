const path = require('path');

const express = require('express');
const router = express.Router();
// /admin/add-product => POST
router.post('/add-product',(req,res,next) =>{
    console.log(req.body);
    res.redirect('/admin/add-product');
})
// /admin/add-product => get
router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
})

module.exports = router;