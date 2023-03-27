import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhishek Tripathi </span>
            from <span className="purple"> Prayagraj, Uttar Pradesh, India.</span>
            <br />I am a Computer Science undergraduate at Dr. APJ Abdul Kalam Technical University.
            <br />
            <br />
            I'm exploring Blockchain technology and building dApps in my spare time.

I am skilled in JavaScript and ReactJS for Frontend, and have working experience in web design. Also proficient in Solidity and C++ and have used MERN stack for development.
I am actively looking for Web3 Intern or Frontend Engineer positions. DM me if interested. Thanks! 😁
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
