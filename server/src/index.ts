import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

var corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
};
const app = express();

// cookies
app.use(cookieParser());
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// interact client to server
app.use(cors(corsOptions));
app.use(morgan("dev"));

// Init Routes
import initRoutes from "./routes";
initRoutes(app);
// Connect Database
import "./config/database";

// server listening
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
