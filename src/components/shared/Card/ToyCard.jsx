import React from "react";
import "./ToyCard.css";
import { Card, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GoStar } from "react-icons/go";

const ToyCard = ({ toy }) => {
  const {
    _id,
    toy_name,
    toy_image,
    seller_name,
    category,
    toy_price,
    toy_quantity,
    toyrating,
  } = toy;

  return (
    <Col>
      <Card className="toy-card">
        <div className="position-relative">
          <Card.Img variant="top" src={toy_image} />
          <div className="toy-rating">
            <div className="d-inline-flex align-items-center gap-1">
              <GoStar />
              {toyrating}
            </div>
          </div>
        </div>
        <Card.Body>
          <Card.Title>{toy_name}</Card.Title>
        </Card.Body>
        <ListGroup variant="flush" className="bg-transparent">
          <ListGroup.Item>Seller: {seller_name}</ListGroup.Item>
          <ListGroup.Item>
            Category: <span className="text-capitalize">{category}</span>
          </ListGroup.Item>
          <ListGroup.Item>Price: {toy_price}TK</ListGroup.Item>
          <ListGroup.Item>In Stock: {toy_quantity}</ListGroup.Item>
        </ListGroup>
        <Card.Footer className="text-center py-4">
          <Link to={`/toy/${_id}`} className="btn btn-primary text-white">
            View Details
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ToyCard;
