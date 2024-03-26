import "./App.css";
import { Banner } from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import Login from "./components/Login";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import YearCalendar from "./components/Form";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      {/* <Skills /> */}
      <Projects />
      {/* <YearCalendar /> */}
      {/* <Login /> */}
    </>
  );
}

export default App;
