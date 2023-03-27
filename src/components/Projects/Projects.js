import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Phan from "../../Assets/Projects/Phan.jpg";
import social from "../../Assets/Projects/social.png";
import Movies from "../../Assets/Projects/Movies.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Phan}
              isBlog={false}
              title="Phan"
              description="Krypt is a blockchain-based payment solution that is used to facilitate cryptocurrency transfers, currently
              Ethereum. Any user can connect their crypto wallets and start using the app."
              ghLink="https://github.com/XavierOP877/Krypto"
              demoLink="https://krypto-client-yo1f.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Movies}
              isBlog={false}
              title="Movies App"
              description="A app in which you can see the latest movies trending on IMDB. You can also add movies as your favourite. You can also
              categories movies based on their genres."
              ghLink="https://github.com/XavierOP877/Movies-App"
              demoLink="https://github.com/XavierOP877/Movies-App"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={social}
              isBlog={false}
              title="Decentralized Social Media"
              description="Decentralized Social Media platform based on LensProtocol which lets user login through their lens profile and
              take the ownership of their own content on the platform."
              ghLink="https://github.com/XavierOP877/Social-Media-Lensprotocol"
              demoLink="https://social-media-lensprotocol.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
