import mongoose from "mongoose";
import express from "express";
import userRouter from "./controllers/student-controller.js";
// import path from "path";
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// import { createEngine } from 'express-react-views';
// import ReactDOMServer from 'react-dom/server';
// import React from 'react';
// import App from './src/App.jsx';


//init
const app = express();
const db =
  "mongodb+srv://akshaypotkhule123:Akshay123@cluster0.fzer5ae.mongodb.net/?retryWrites=true&w=majority";
const port = 3000;

// connection
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

mongoose
  .connect(db)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

// // Set up React view engine
// const reactEngineOptions = {
//   renderView: (component, props) => ReactDOMServer.renderToString(React.createElement(component, props)),
// };
// app.set('views', path.join(__dirname, 'src'));
// app.set('view engine', 'jsx');
// app.engine('jsx', createEngine(reactEngineOptions));

// // Serve static files
// app.use(express.static(path.join(__dirname, 'public')));

// // Route for rendering React component
// app.get('/', (req, res) => {
//   const initialProps = { message: 'Hello from the server!' };
//   const reactComponent = React.createElement(App, initialProps);
//   const reactHtml = ReactDOMServer.renderToString(reactComponent);

//   res.render('Main.jsx', { reactHtml });
// });

//Middlewares
app.use(express.json());
app.use(userRouter)

// creating an api
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});
