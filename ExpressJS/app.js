const express = require("express");
const app = express();
const bodyParser = require('body-parser');

// Parsing the file
app.use(bodyParser.urlencoded({extended:false}));
app.get('/product',(req,res,next) =>{
    console.log(req.body);
    res.redirect('/');
})
app.use('/add-product',(req,res,next)=>{
    console.log('In the middleware');
    res.send('<form action="/product" method="POST"><input type="text"><button type="submit">Add Product</button></form>');
})

app.use('/',(req,res,next) => {
    console.log('In another middleware');
    res.send('<h1> Hello From Express');
})

app.listen(3000);