import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <Row>
      <Col md={9}>
        <p className="mb-4 mb-lg-0 fs-1 text-lg-start text-center ">
          So What Are You Waiting For?
        </p>
      </Col>
      <Col
        md={3}
        className="d-flex align-items-center justify-content-lg-end justify-content-center"
      >
        <Link to="/register" className="btn btn-dark fs-4 px-5">
          Join Us!
        </Link>
      </Col>
    </Row>
  );
};

export default CTA;
