import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const ProjectCard = ({ image }) => {
  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Img variant="top" src={image.src} alt={image.alt} />
        <Card.Body>
          <Card.Title>{image.alt}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectCard;