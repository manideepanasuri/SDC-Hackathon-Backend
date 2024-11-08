import mongoose from "mongoose";
import "dotenv/config";

export default async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Database Connected Successfully");
  } catch (err) {
    console.log(err);
    //added exit with code 1
    process.exit(1);
  }
}