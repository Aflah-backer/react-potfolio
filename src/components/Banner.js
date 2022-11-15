import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/contact-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { HashLink } from "react-router-hash-link";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleteing] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1)
  const toRotate = ["Web Design", "Web Development", "Problem Solving"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleteing(true);
      setIndex(prevIndex => prevIndex - 1)
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleteing(false);
      setLoopNum(loopNum + 1);
      setIndex(1)
      setDelta(500);
    }else {
        setIndex(prevIndex => prevIndex + 1)
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate_animated animate_fadeIn" : ""}
                >
                  <span className="tagline">Aflah backer a k</span>
                  <h1>
                    {`Hi I'm Full stack Developer`} <br />{" "}
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>
                    Hi I'm Aflah backer A K Self-Taught Full Stack Developer
                    wiht a strong drive and willingness to learn new things. I
                    love creating simple and effective UI that optimizes user's
                    experience. My personal mission is to further my
                    specialization in full-stack development, solve difficult
                    problems
                  </p>
                  {/* <HashLink to="#connect">
                  </HashLink> */}
                  <button onClick={() => console.log("connect")}>
                    Let's connect{" "}
                    <ArrowRightCircle size={25}></ArrowRightCircle>
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate_animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Headder Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
