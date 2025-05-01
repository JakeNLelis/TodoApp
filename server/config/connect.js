import mongoose from "mongoose";

export const connectToDb = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI).then(() => {
      console.log("Connected to MongoDB");
    });
  } catch (error) {
    console.log("Counld not connect to the database ", error);
  }
};
