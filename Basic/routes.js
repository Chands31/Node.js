const fs = require('fs');


const responseHandler = (req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
    res.write('<html>');
    res.write('<head><title> Enter Message </title><head>');
    res.write('<body><form action="/message" method="POST" ><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('<html>');
    return res.end();
}
    if(url === '/message' && method === 'POST'){
    const body = []; 
    req.on('data',(chunk) => {
        console.log(chunk);
        body.push(chunk);
    });

    return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody);
        fs.writeFile('message.txt',parsedBody.split('=')[1],() =>{
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
        });
    });
}
res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head><title> Mt first page </title><head>');
res.write('<body><h1> Hello from Node.js backed service</h1></body>');
res.write('<html>');
res.end();
}

module.exports = responseHandler;