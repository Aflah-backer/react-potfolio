import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ecom1.png";
import projImg2 from "../assets/img/chatsapp.png";
import projImg3 from "../assets/img/hotelbooking.png";
import incubation from "../assets/img/incubation.png"
import usermanagement from "../assets/img/usermanagement.png"
import todo from "../assets/img/todo.png"
import netflix from "../assets/img/netflix.png"
import tesla from "../assets/img/tesla.png"
import boringcom from "../assets/img/boringco.png"
import firstPotfolio from "../assets/img/firstPotfolio.png"
import Potfolio from "../assets/img/htmlPotfolio.png"
import reactPotfolio from "../assets/img/reactPotfolio.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const majorProjects = [
    {
      title: "BenefitsBeats",
      description: "E-Commerce-Website",
      imgUrl: projImg1,
      webLink:"https://benefitsbeats.herokuapp.com/",
      gitLink:"https://github.com/Aflah-backer/e-commerce-website-benefits"
    },
    {
      title: "Chatsapp",
      description: "Chat Application",
      imgUrl: projImg2,
      gitLink:"https://github.com/Aflah-backer/ChatsApp_websocket"
    },
    {
      title: "Hotel Booking",
      description: "Booking Website",
      imgUrl: projImg3,
      gitLink:"https://github.com/Aflah-backer/HotelBooking"
    },
  ];

  const miniProjects = [
    {
      title: "My Incubation Management",
      description: "Slot Booking",
      imgUrl: incubation,
      gitLink:"https://github.com/Aflah-backer/MyIncubationManagment"
    },
    {
      title: "User Management",
      description: "Use CRUD Opration",
      imgUrl: usermanagement,
      gitLink:"https://github.com/Aflah-backer/UserManagment"
    },
    {
      title: "ToDo List",
      description: "Todo list",
      imgUrl: todo,
      gitLink:"https://github.com/Aflah-backer/ToDo_project_in_React"
    },
  ];

  const webClone = [
    {
      title: "Netflix-clone",
      description: "Full Responsive website using React",
      imgUrl: netflix,
      webLink:"https://react-netflix-clone-test.herokuapp.com/",
      gitLink:"https://github.com/Aflah-backer/React_Netflix_clone"
    },
    {
      title: "Tesla-clone",
      description: "Responsive website using bootstrap and media query",
      imgUrl: tesla,
      webLink:"https://aflah-backer.github.io/tesla-clone/",
      gitLink:"https://github.com/Aflah-backer/tesla-clone"
    },
    {
      title: "The Boring Company - Clone",
      description: "Static website using html and css",
      imgUrl: boringcom,
      webLink:"https://aflah-backer.github.io/The-boring-company-clone/",
      gitLink:"https://github.com/Aflah-backer/The-boring-company-clone"
    },
    {
      title: "Personal website",
      description: "My first personal website using html,css and javaScript",
      imgUrl: firstPotfolio,
      webLink:"https://aflah-backer.github.io/personalWeb/",
      gitLink:"https://github.com/Aflah-backer/personalWeb"
    },
    {
      title: "PortFolio",
      description: "Portfolio using html,css and javaScript",
      imgUrl: Potfolio,
      webLink:"https://aflah-backer.github.io/My_portfolio/",
      gitLink:"https://github.com/Aflah-backer/My_portfolio"
    },
    {
      title: "PortFolio",
      description: "Portfolio using html, css, javaScript and React",
      imgUrl: reactPotfolio,
      gitLink:"https://github.com/Aflah-backer/react-potfolio"
    },
  ];


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p></p>
                  <Tab.Container id="projects" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-item-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Static Web & Portfolio</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Major Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Mini Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                          {webClone.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {majorProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row>
                          {miniProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>               
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
