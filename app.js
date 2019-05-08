const http = require('http');
const port=process.env.PORT || 3000
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end('<h1>Apostrophe Inline Login Demo</h1>');
const express = require('express');
const app = new express();
app.get('/index.htm', function(request, response){
    response.sendfile('yourhtmlpagename.html');
});
server.listen(port,() => {
console.log(`Server running at port `+port);

});