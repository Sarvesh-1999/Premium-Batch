import dotenv from "dotenv";
dotenv.config({ quiet: true });

import express from "express";
import { connectDB } from "./src/config/database.js";
import bookRoutes from "./src/routes/book-routes.js";

const app = express();
const PORT = process.env.PORT || 9000;

//! DB CONNECTION
connectDB();

//! MIDDLEWARE
app.use(express.json());

//! ROUTES
app.use(bookRoutes);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server started at ${PORT}`);
});
