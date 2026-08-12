import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(9000, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Server started at PORT 9000");
});
