import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const NotFound = () => {
  useTitle("404 Page Not Found");

  return (
    <Container>
      <Row className="align-items-center justify-content-center min-vh-100">
        <Col md={5} className="text-center">
          <img
            src="https://i.ibb.co/NVHfWS2/404.jpg"
            alt="404 Page"
            className="w-100"
          />
          <Link to="/" className="btn btn-primary">
            Return To Home
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
