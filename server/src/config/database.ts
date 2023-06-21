import mongoose from "mongoose";
const URI = process.env.MONGODB_URL;

mongoose
  .connect(`${URI}`)
  .then(() => console.log("MongoDB has connected"))
  .catch((error: Error) => {
    console.log(error);
  });
