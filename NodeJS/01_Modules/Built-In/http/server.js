//! HTTP Module is a core module used to create server

//! STEPS RO CREATE A HTTP SERVER
// 1) import http
// 2) use createServer()
// 3) assign port no.
// 4) define routes

import http from "node:http";

let server = http.createServer((req, res) => {
  // req ===>  req.body, req.params , req.cookies
  // res ===>  res.write(), res.json(), res.end()

  res.write("My First Server");
  res.end(); // it ends the req res cycle
});

server.listen(5000, (err) => {
  if (err) {
    console.log("Server crashed", err);
    return;
  }
  console.log("Server started at port 5000");
});
