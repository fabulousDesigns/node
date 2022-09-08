const http = require("http");

const server = http.createServer((req, res) => {
  //   res.write();
  if (req.url === "/") {
    res.end("Homepage");
  }
  if (req.url === "/about") {
    res.end("About Page");
  }
});

server.listen(8000);
