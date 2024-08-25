import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://developershubhampawar:6MQhnU9UDPyfSplK@blogs.enmq5lp.mongodb.net/";
  try {
    await mongoose.connect(connectionUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection successful");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

export default connectToDB;
