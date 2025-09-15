import mongoose from "mongoose";

export default async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("database connected");
  } catch (e) {
    console.log(e);
  }
}
