const path = require('path');
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// Parsing the file
app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

app.use((req,res,next)=>{
   res.sendFile(path.join(__dirname,'views','404.html'));
})

app.listen(3000);