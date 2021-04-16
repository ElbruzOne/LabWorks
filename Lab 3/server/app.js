const http = require('http');
const fs = require('fs');
let port = 8080;


let requestHandler = (request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8' });
    if (request.url === "/contacts") {
        console.log(request.url);
        response.statusCode = 404;
        response.write("404 - Not Found");
        response.end();
    }
    else {
        console.log(request.url);
        response.write(`Server started at port ${port}!`);
        response.end();
    }
    fs.appendFile("logs.txt", `${request.url}\r\n`, err => {if (err) console.log(err)});
}
    
const server = http.createServer(requestHandler);
server.listen(port, (err) => {
    if(err) {
        return console.log('Error:', err);
        }
    console.log(`Server started at port ${port}`);
})

