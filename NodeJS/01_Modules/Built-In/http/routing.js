import http from "node:http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome");
    res.end();
  } else if (req.url === "/about") {
    res.write("ABout Page");
    res.end();
  } else if (req.url === "/contacts") {
    res.write("Contacts Page");
    res.end();
  } else {
    res.write("Not Found");
    res.end();
  }
});

server.listen(9000, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Server started at PORT 9000");
});
