import mongoose from "mongoose";

async function connectToMongoDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://akashdeydev:gripbankmaverick@cluster0.v3df1t7.mongodb.net/banking-app"
    );
    console.log("Database connected successfully...");
  } catch (error) {
    console.log(error);
  }
}

export default connectToMongoDB;
