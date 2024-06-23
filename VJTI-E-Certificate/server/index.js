import mongoose from "mongoose";
import express from "express";
import userRouter from "./controllers/student-controller.js";
import verifyRouter from "./controllers/verify-controller.js";
import cors from 'cors';
import bodyParser from "body-parser";



//init
const app = express();

const db =
  "mongodb+srv://akshaypotkhule123:Akshay123@cluster0.fzer5ae.mongodb.net/?retryWrites=true&w=majority";
const port = 3000;



mongoose
  .connect(db)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });



//Middlewares
app.use(cors({
  origin: 'http://localhost:5173' // Replace with the origin of your client application
}));
app.use(express.json());
app.use(bodyParser.json());
app.use(userRouter)
app.use(verifyRouter)

// creating an api
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});