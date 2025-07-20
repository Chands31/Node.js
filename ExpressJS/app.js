const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
// Parsing the file
app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRoutes);

app.use('/',(req,res,next) => {
    console.log('In another middleware');
    res.send('<h1> Hello From Express');
})

app.listen(3000);