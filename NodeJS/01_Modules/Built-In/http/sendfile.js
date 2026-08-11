// GET / --> send index.html file
// GET /css  --> send style.css
// GET /json --> send data.json

import http from "node:http";
import fs from "node:fs";

const PORT = 9000;
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    let src = fs.createReadStream("./index.html", "utf-8");
    res.writeHead(200, { "content-type": "text/html" });
    src.pipe(res);
  } else if (req.url === "/css") {
    let src = fs.createReadStream("./style.css", "utf-8");
    res.writeHead(200, { "content-type": "text/css" });
    src.pipe(res);
  } else if (req.url === "/json") {
    let src = fs.createReadStream("./data.json", "utf-8");
    res.writeHead(200, { "content-type": "application/json" });
    src.pipe(res);
  } else {
    res.end("NOT FOUND");
  }
});

server.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Server started at PORT", PORT);
});
