import "./App.css";
import { Banner } from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import Login from "./components/Login";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import Form  from "./components/AddCommittee";
import AddCertificate from "./components/AddCertificate";

function App() {
  return (
    <>
      <NavBar />

      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Projects />
              </>
            }
          />
          {/* <Route path="/form" element={<Form />} /> */}
          {/* Add a route for the Form component */}
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/addcertificate" element={<AddCertificate />} />
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
        {/* <Banner /> */}
        {/* <Projects /> */}
      </Router>

    </>
  );
}

export default App;
