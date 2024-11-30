import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";

const Project = ({ heading }) => {
  // Array of image data
  const images = [
    { src: process.env.PUBLIC_URL + "/images/IMG1.jpg", alt: "The Addams Family . Irmo Theatre Company . 2023" },
    { src: process.env.PUBLIC_URL + "/images/IMG5.jpg", alt: "The Addams Family . Irmo Theatre Company . 2023" },
    { src: process.env.PUBLIC_URL + "/images/IMG3.jpg", alt: "The Addams Family . Irmo Theatre Company . 2023" },
    { src: process.env.PUBLIC_URL + "/images/IMG4.jpg", alt: "High School Musical: On Stage . Irmo Theatre Company . 2022" },
    { src: process.env.PUBLIC_URL + "/images/IMG2.jpg", alt: "High School Musical: On Stage . Irmo Theatre Company . 2022" },
    { src: process.env.PUBLIC_URL + "/images/IMG6.jpg", alt: "The Addams Family . Irmo Theatre Company . 2023" },
    // Add more images as needed
  ];

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container>
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {images.map((image, index) => (
            <ProjectCard key={index} image={image} />
          ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;