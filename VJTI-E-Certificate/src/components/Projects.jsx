import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Cards } from "./Cards";
import { Toast } from "./Toast.jsx";
import React from "react";
import projImg1 from "../Images/enthu.png";
import projImg2 from "../Images/Rangwardhan.png";
import projImg3 from "../Images/digital.png";
import projImg4 from "../Images/ecell.png";
import projImg5 from "../Images/pratibimb.png";
import projImg6 from "../Images/dla.png";
import projImg7 from "../Images/techno.png";
import colorSharp2 from "../Images/concert.jpg";
import Form from "./Form";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useNavigate } from "react-router";
import { USER, isLoggedIn } from "./Constants.jsx";
import { useToast } from "@chakra-ui/toast";
import { Footer } from "./Footer.jsx";

export const Projects = () => {
  const history = useNavigate();
  const toast = useToast();
  // const Navigate = () => {
  //   history.push("/Form"); // Replace '/Form' with the actual path to your Form component
  // };

  // fetch comittee data from the database
  const getCommitteeData = async () => {
    let response = await fetch("http://localhost:3000/get-committee-cards");
    return await response.json();
  };

  const [committee, setData] = React.useState([]);

  function ShowToast() {
    return toast({
      title: "You need to login first", 
      // description: "We will get back to you soon.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  }

  React.useEffect(() => {
    getCommitteeData().then((committee) => {
      setData(committee);
    });
  }, []);

  // const committee = [
  //   {
  //     title: "Enthusia",
  //     description: "Design & Development",
  //     imgUrl: projImg1,
  //   },
  //   {
  //     title: "Rangwardhan",
  //     description: "Design & Development",
  //     imgUrl: projImg2,
  //   },
  //   {
  //     title: "Digital VJTI",
  //     description: "Design & Development",
  //     imgUrl: projImg3,
  //   },
  //   {
  //     title: "Pratibimb",
  //     description: "Design & Development",
  //     imgUrl: projImg5,
  //   },
  //   {
  //     title: "ECell",
  //     description: "Design & Development",
  //     imgUrl: projImg4,
  //   },

  //   {
  //     title: "Technovanza",
  //     description: "Design & Development",
  //     imgUrl: projImg7,
  //   },
  // ];

  return (
    <>
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={"animate__animated animate__fadeIn"}>
                  <h2>Committees</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp">
                      <Tab.Pane eventKey="first">
                        <Row style={{ marginLeft: "135px" }}>
                          {committee.slice(0, 6).map((project, index) => (
                            <Cards
                              key={index}
                              {...project}
                              onClick={() => {
                                // Handle click action here, such as opening a modal or navigating to a new page
                                if (isLoggedIn === "false") {
                                  ShowToast();
                                } else {
                                  if (isLoggedIn === "true") {
                                    history("/Events", {
                                      state: { title: project.title },
                                    });
                                  } else {
                                    history("/form", {
                                      state: { title: project.title },
                                    });
                                  }
                                }}}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row style={{ marginLeft: "135px" }}>
                          {committee.slice(6, 9).map((project, index) => (
                            <Cards
                              key={index}
                              {...project}
                              onClick={() => {
                                // Handle click action here, such as opening a modal or navigating to a new page
                                if (isLoggedIn === "false") {
                                  ShowToast();
                                } else {
                                  if (isLoggedIn === "true") {
                                    history("/Events", {
                                      state: { title: project.title },
                                    });
                                  } else {
                                    history("/form", {
                                      state: { title: project.title },
                                    });
                                  }
                                }}}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        {/* <Row style={{ marginLeft: "130px" }}>
                          {committee.slice(6, 9).map((project, index) => (
                            <Cards
                              key={index}
                              {...project}
                              onClick={() => handleCardClick(project)}
                            />
                          ))}
                        </Row> */}
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
    <Footer/>
    </>
  );
};
