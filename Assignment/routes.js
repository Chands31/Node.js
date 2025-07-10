const handler = (req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title> Hello Greeting </title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="Username"> <button type="submit"> Submit </button></form></body>')
        res.write('</html>');
        return res.end();
    }
    if(url === '/users'){
        res.write('<html>');
        res.write('<head><title> User List </title></head>');
        res.write('<body> <ul> <li> user1 </li> </ul> </body>')
        res.write('</html>');
        return res.end();
    }
    if(url === '/create-user' && method === 'POST'){
        const dataa = [];
        req.on('data',(chunk)=>{
            console.log(chunk);
            dataa.push(chunk);
        });

        return req.on('end',()=>{
            const ParsedData = Buffer.concat(dataa).toString();
            console.log(ParsedData.split('=')[1]);

        });
    }
}

module.exports = handler;