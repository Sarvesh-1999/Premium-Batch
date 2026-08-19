import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB connected successfully ✅");
  } catch (error) {
    console.log("DB connection failed ❌", error);
  }
}
