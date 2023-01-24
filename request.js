const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/plain",
      Trailer: "Content-MD5",
    });
    res.end("okay");
  } else if (req.url === "/node") {
    // res.statusCode = 306;
    res.writeHead(200, {
      "Content-Type": "text/html",
      Trailer: "Content-MD5",
    });
    res.write("<html> <h1>asdadadad</h1> </html>");
    res.end("node");
  }
});

server.listen(3000);
console.log("port");
