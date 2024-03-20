import mongoose from "mongoose";
import  express  from "express";



//init
const app = express();
const db =
  "mongodb+srv://akshaypotkhule123:Akshay123@cluster0.fzer5ae.mongodb.net/?retryWrites=true&w=majority";
const port = 3000;


// connection
mongoose.connect(db)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });


// creating an api
app.listen(port,"0.0.0.0",()=>{
    console.log(`Server is running on port ${port}`);
})





