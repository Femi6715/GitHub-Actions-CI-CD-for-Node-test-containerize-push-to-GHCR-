const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({ service: 'node-app', path: req.url }));
});
const port = process.env.PORT || 3000;
server.listen(port, () => console.log('listening on', port));
