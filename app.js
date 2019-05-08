const http = require('http');
const port=process.env.PORT || 3000
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end('<!DOCTYPE html><html><body><h2>Apostrophe Inline Login Demo</h2><button type="button" onclick="alert('Hello world!')">Login</button></body></html>');
});
server.listen(port,() => {
console.log(`Server running at port `+port);
});