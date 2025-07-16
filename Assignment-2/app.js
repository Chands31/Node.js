const express = require('express');
const http = require('http');
const app = express();

// middleware
// app.use((req,res,next) => {
//     console.log('In the middleware');
//     next();
// })

// app.use((req,res,next) => {
//     console.log('Still in the middleware');
//     res.send('<p> Assignment Solved </p>');
// });
app.use('/users',(req,res,next) => {
    console.log('/user middleware');
    res.send('<p>The middleware that handles /users</p>');
});
app.use('/',(req,res,next) => {
    console.log('/ middleware');
    res.send('<p>The middleware that handles /</p>');
});

app.listen(3000);

