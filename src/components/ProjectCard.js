import { Col } from "react-bootstrap";
import {FaGithub} from "react-icons/fa"
import {GoBrowser} from "react-icons/go"

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  webLink,
  gitLink,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Project_image"/>
        <div className="proj-txtx">
            <h4>{title}</h4>
          <span>{description}</span>
          <div className="links">
                    {webLink ? <span><a style={{fontSize:"30px"}} href={webLink} target="blank" ><GoBrowser/></a></span>:""}
                    {gitLink ? <span><a style={{fontSize:"30px"}} href={gitLink} target="blank" ><FaGithub/></a></span>:""}
                </div>
        </div>
      </div>
    </Col>
  );
};
