import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const connectDB = async () => {
  try {
    const connectionOnInstance = await mongoose.connect(
      `${process.env.MONGO_URI}`
    );
    console.log(
      `connection.db.js: MongoDB connection is successfully on ${connectionOnInstance.connection.host}`
    );
  } catch (error) {
    console.log(`connection.db.js: MongoDB is failed to connect ${error}`);
  }
};

export default connectDB;
