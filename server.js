const http = require('http');
const fs = require('fs');
const port = 3000;

http.createServer((request, response) => {
  console.log(`${request.method} ${request.url}`);
      fs.readFile('homepage.html', (err, data) => {
        if (err) {
          response.writeHead(500, { 'Content-Type': 'text/plain' });
          response.end('500 Internal Server Error');
        } else {
          response.writeHead(200, { 'Content-Type': 'text/html' });
          response.end(data);
        }
      });
}).listen(port);

console.log(`Server running at http://localhost:${port}/`);


