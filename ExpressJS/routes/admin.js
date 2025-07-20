const { Router } = require('express');
const express = require('express');
const router = express.Router();

router. post('/product',(req,res,next) =>{
    console.log(req.body);
    res.redirect('/');
})
router.get('/add-product',(req,res,next)=>{
    console.log('In the middleware');
    res.send('<form action="/product" method="POST"><input type="text"><button type="submit">Add Product</button></form>');
})

module.exports = router;