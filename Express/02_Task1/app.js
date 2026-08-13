import express from "express";
import fs from "node:fs";
import mongodb from "mongodb";

const app = express();
const PORT = 9000;

//!----> DATABASE CONNECTION
async function connectDB() {
  try {
    let client = await mongodb.MongoClient.connect("mongodb://localhost:27017");
    let database = client.db("Premium-Task1");
    let collection = await database.createCollection("users");
    return collection;
  } catch (error) {
    console.log("DB CONNECTION FAILED❌", error);
  }
}

//!----> MIDDLEWARE
app.use(express.urlencoded({ extended: true }));

//!-----> ROUTES
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome" });
});

app.get("/register", (req, res) => {
  let src = fs.createReadStream("./pages/index.html", "utf-8");
  src.pipe(res);
});

app.post("/submit", async (req, res) => {
  try {
    let { username, email, password } = req.body;
    let collection = await connectDB();
    await collection.insertOne({ username, email, password });
    res.json({ message: "User Created" });
  } catch (error) {
    console.log(error);
    res.json({ message: "Unable to create user" });
  }
});

app.get("/users", async (req, res) => {
  try {
    let collection = await connectDB();
    let users = await collection.find({}).toArray();
    res.json({ users });
  } catch (error) {
    console.log(error);
    res.json({ message: "Unable to get all users" });
  }
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("SERVER CONNECTION FAILED❌");
    return;
  }
  console.log("SERVER STARTED AT PORT", PORT);
});
