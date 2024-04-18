import "./App.css";
import { Banner } from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import { NavBar } from "./components/NavBar";
import Authentication from "./components/Login";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import Register from "./components/Regsiter";

import Form from "./components/Form";
import AddCommittee from "./components/AddCommittee";
import { USER } from "./components/Global";
import { Footer } from "./components/Footer";
import AddCertificate from "./components/AddCertificate";

function App() {
  return (
    <>
      <Router>
        {USER === "admin" && <NavBar />}
        <Routes>
          <Route
            path="/"
            element={
              <>
                {USER === "admin" && <Banner />}
                {USER === "admin" && <Projects />}
                <Outlet />
                {/* <Footer /> */}
              </>
            }
          />

          <Route exact path="/form" element={<Form />} />
          <Route exact path="/addCertificate" element={<AddCertificate />} />
          {/* Add a route for the Form component */}

          <Route exact path="/login" element={<Authentication />} />
          {/* <Route path="/skills" element={<Skills />} /> */}
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
