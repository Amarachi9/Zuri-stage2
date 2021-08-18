const http = require('http');

const server = http.createServer(function (req, res ) {
   res.writeHead(200, {'content-Type': 'application/json'});
  res.end(`
       {
          "name": "Amarachi Ogbonnaya"
       }
    `);  
});

server.listen(4000, '127.0.0.1');
console.log("Welcome live on port 4000!"); 