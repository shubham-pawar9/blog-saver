import mongoose from "mongoose";

const connectToDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose.connect(
    "mongodb+srv://developershubhampawar:6MQhnU9UDPyfSplK@blogs.enmq5lp.mongodb.net/",
    {
      // remove useNewUrlParser and useUnifiedTopology
    }
  );

  mongoose.connection.on("connected", () => {
    console.log("Database connection successful");
  });

  mongoose.connection.on("error", (err) => {
    console.log(`Database connection error: ${err}`);
  });
};

export default connectToDB;
