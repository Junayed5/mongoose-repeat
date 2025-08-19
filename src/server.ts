import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";

let server: Server;
const port = 5000;

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://mongo-juna:mongodb@cluster0.8ujknfb.mongodb.net/start-new?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("connected to mongoDB");
    server = app.listen(port, () => {
      console.log(`App is running on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
