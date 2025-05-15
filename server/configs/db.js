import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Data Base Connected")
    );
    await mongoose.connect(`${process.env.MONGODB_URL}/kammapharma`);
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
