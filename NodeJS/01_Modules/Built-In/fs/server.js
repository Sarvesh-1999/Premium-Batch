//! FILE SYSTEM MODULE

import fs from "node:fs";

//-------------- CRUD SYNC WAY--------------------

//! CREATE ---> fs.writeFileSync("path","data")

// fs.writeFileSync("./demo.txt", "Hii i am demo file");
// console.log("File Created");

//! READ ---> fs.readFileSync("path" , "encoding")

// let data = fs.readFileSync("./demo.txt", "utf-8");
// console.log(data);

//! UPDATE ---> fs.appendFileSync("path" , "updated value")

// fs.appendFileSync("./demo.txt", "\nI am Updated value");
// console.log("File Updated");

//! DELETE ---> fs.unlinkSync("path")
// fs.unlinkSync("./demo.txt");
// console.log("File Deleted");

//-------------- CRUD ASYNC WAY--------------------

//! CREATE --> fs.writeFile("path","data",errFirstCallback)
// fs.writeFile("./logs.txt", "All Logs are present here", (err) => {
//   if (err) {
//     console.log("Unable to create file", err);
//     return;
//   }

//   console.log("File Created");
// });

//! READ ---> fs.readFile("path","data",(err , data)=>{})
// fs.readFile("./server.js", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Unable to read file", err);
//     return;
//   }
//   console.log(data);
// });

//! UPDATE
// fs.appendFile("./logs.txt", "\nI am first log", (err) => {
//   if (err) {
//     console.log("Unable to update");
//     return;
//   }
//   console.log("File updated");
// });

//! DELETE
// fs.unlink("./logs.txt", (err) => {
//   if (err) {
//     console.log("unable to delete");
//     return;
//   }
//   console.log("File deleted");
// });

//! STREAMS AND BUFFER
// BUFFER :  it is a temporary space in a memory
// STREAMS : it means continuesly reading and writing the data in chuncks

//! DEFAULT SIZE OF BUFFER
// Normal file --> 64kb
// Audio ya Video --> 16kb

//! TYPES OF STREAMS
// 1) Writable Stream --> fs.createWriteStream("PATH")
// 2) Readable Stream --> fs.createReadStream("PATH" , "ENCODING")
// 3) Duplex Stream --> src.pipe(dest)  RECOMMENDED
// 4) Transform Stream

//! DUPLEX STREAM EXAMPLE
// let src = fs.createReadStream("./server.js")
// let dest = fs.createWriteStream("./dummy.js")
// src.pipe(dest)

//! HOW CHUNCKS WORKS
let src = fs.createReadStream("./user.txt", {
  encoding: "utf8",
  highWaterMark: 1, //<-- size of chunk in byte
});

// 1byte = 8bits ===> 1 Character takes 1 Byte
src.on("data", (chunk) => {
  console.log(chunk);
});
