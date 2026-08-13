import express from "express";
import userRoutes from "./src/routes/user-routes.js";

const app = express();
const PORT = 9000;

//! ROUTES
app.use(userRoutes);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Server started");
});
