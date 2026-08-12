import mongodb from "mongodb";

async function connectDB() {
  //! STEP 1:  CREATE A CONNECTION
  let client = await mongodb.MongoClient.connect("mongodb://localhost:27017");

  //! STEP 2:  CREATE A DATABASE
  let database = client.db("premium-node");

  //! STEP 3: CREATE A COLLECTION
  let collection = await database.createCollection("users");

  //! CREATE A SINGLE USER ----> insertOne()
  //   collection.insertOne({ name: "Rahul", age: 25 });
  //   console.log("User Created");

  //! CREATE MULTIPLE USERS ----> insertMany()
  // collection.insertMany([
  //   { name: "Raj", age: 20 },
  //   { name: "Rohit", age: 21 },
  // ]);
  //   console.log("Users created");

  //! GET SINGLE USER ----> findOne({filter})
  //   let user = await collection.findOne({ name: "Rahul" });
  //   console.log(user);

  //! GET MULTIPLE USERS ----> find({filter})
  //   let users = await collection.find({}).toArray();
  //   console.log(users);

  //! UPDATE SINGLE USER ---->  updateOne({filter} , {updatedValue})
  //   let result = await collection.updateOne(
  //     { name: "Rahul" },
  //     { $set: { name: "Rahul Kumar" } },
  //   );
  //   console.log(result);

  //! UPDATE MULTIPLE USERS ----> updateMany({filter} , {updatedValue})
  //   let result = await collection.updateMany(
  //     { age: { $gt: 20 } },
  //     { $set: { status: "Senior" } },
  //   );
  //   console.log(result);

  //! DELETE SINGLE USER ----> deleteOne({filter})
  //   let result = await collection.deleteOne({ name: "Rohit" });
  //   console.log(result);

  //! DELETE MULTIPLE USERS ----> deleteMany({})
  //   let result = await collection.deleteMany({});
  //   console.log(result);
}

connectDB();
