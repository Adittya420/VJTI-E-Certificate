import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Cards } from "./Cards";
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
import { USER } from "./Global";

export const Projects = () => {
  const history = useNavigate();
  // const Navigate = () => {
  //   history.push("/Form"); // Replace '/Form' with the actual path to your Form component
  // };

  const projects = [
    {
      title: "Enthusia",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Rangwardhan",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Digital VJTI",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Pratibimb",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "ECell",
      description: "Design & Development",
      imgUrl: projImg4,
    },

    {
      title: "Technovanza",
      description: "Design & Development",
      imgUrl: projImg7,
    },
  ];

  return (
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
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row style={{ marginLeft: "95px" }}>
                          {projects.map((project, index) => {
                            return (
                              <Cards
                                key={index}
                                {...project}
                                onClick={() => {
                                  // Handle click action here, such as opening a modal or navigating to a new page

                                  if (USER === "admin") {
                                    history("/addCertificate", {
                                      state: { title: project.title },
                                    });
                                  }

                                  history("/form", {
                                    state: { title: project.title },
                                  });
                                }}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
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
  );
};
