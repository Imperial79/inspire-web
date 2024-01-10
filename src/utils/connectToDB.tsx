import mongoose from "mongoose";

const connection = {
  isConnected: false,
};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.connection_string!);
    connection.isConnected = true;
    // connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    connection.isConnected = false;
    console.log(error);
  }
};
