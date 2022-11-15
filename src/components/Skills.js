import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import colorSharp from '../assets/img/color-sharp.png'

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>web developer with a vast array of knowledge in many different front-end and back-end languages. Excited about building interactive and user-friendly websites. Looking for a role as a full-stack developer in an organization that promotes self- learning and growth.</p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>MongoDb</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Express JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>React JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Node JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>MUI</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Chakra UI</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>jQuery</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Firebase</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Postgresql</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>AWS</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Heroku</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>GitHub</h5>
                            </div>                             
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} alt="Image" className="background-image-left" />
        </section>
      )

}