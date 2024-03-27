import "./App.css";
import { Banner } from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import Authentication from "./components/Login";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import Register from "./components/Register";
import Form from "./components/Form";
import AddCommittee from "./components/AddCommittee";
import { USER } from "./components/Global";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        {USER === "user" && <NavBar />}
        <Routes>
          <Route
            path="/"
            element={
              <>
                {USER === "user" && <Banner />}
                <Projects />
                {/* <Footer /> */}
              </>
            }
          />

          <Route exact path="/form" element={<Form />} />
          <Route exact path="/addCertificate" element={<Form />} />
          {/* Add a route for the Form component */}

          <Route exact path="/login" element={<Authentication />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
