import React from "react";
import "./ToyDetail.css";
import { Button, Col, Container, ListGroup, Modal, Row } from "react-bootstrap";
import { GoStar } from "react-icons/go";
import { BsPencilSquare } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../../Providers/AuthProvider";
import { useState } from "react";
import EditForm from "./EditForm";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";

const ToyDetail = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const toy = useLoaderData();

  const [loadedToy, setLoadedToy] = useState(toy);
  const {
    _id,
    toy_name,
    toy_image,
    seller_name,
    seller_email,
    category,
    toy_price,
    toy_quantity,
    toy_description,
    toyrating,
  } = loadedToy;

  useTitle(toy_name);

  const [newRating, setNewRating] = useState(toyrating);
  const handleEditToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const toy_name = form.toy_name.value;
    const toy_image = form.toy_image.value;
    const category = form.category.value;
    const toy_price = parseInt(form.toy_price.value);
    const toy_quantity = parseInt(form.toy_quantity.value);
    const toy_description = form.toy_description.value;
    const toy_data = {
      _id,
      toy_name,
      toy_image,
      seller_name,
      seller_email,
      category,
      toy_price,
      toy_quantity,
      toy_description,
      toyrating: newRating,
    };
    fetch(`https://akushontoy-server.vercel.app/toy/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toy_data),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Toy Successfully Updated!",
          showConfirmButton: false,
          timer: 1500,
        });
        handleClose();
      });
    setLoadedToy(toy_data);
  };

  const handleToyDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://akushontoy-server.vercel.app/toy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              navigate("/my-toys");
            }
          });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Toy Deleted!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <>
      <Container className="py-6">
        <Row>
          <Col md={6}>
            <div className="position-relative">
              <LazyLoadImage src={toy_image} className="mw-100 mb-lg-0 mb-5" />
              <div className="toy-rating">
                <div className="d-inline-flex align-items-center gap-1">
                  <GoStar />
                  {toyrating}
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <h2 className="mb-5 fs-1 text-lg-start text-center mt-lg-0 mt-3">
              {toy_name}
            </h2>
            <ListGroup variant="flush" className="fs-5">
              {seller_email === user.email && (
                <ListGroup.Item>
                  <Button
                    variant="primary"
                    onClick={handleShow}
                    className="text-white d-inline-flex align-items-center me-2"
                  >
                    <BsPencilSquare className="me-1" />
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="text-white d-inline-flex align-items-center"
                    onClick={() => {
                      handleToyDelete(_id);
                    }}
                  >
                    <MdDeleteForever className=" fs-5" />
                    Delete
                  </Button>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <span className="text-decoration-underline me-1">Seller:</span>
                {seller_name}
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="text-decoration-underline me-1">
                  Category:
                </span>
                {category}
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="text-decoration-underline me-1">Price:</span>
                {toy_price}TK
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="text-decoration-underline me-1">
                  In Stock:
                </span>
                {toy_quantity}
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="text-decoration-underline me-1">
                  Description:
                </span>
                {toy_description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Toy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm
            toy={loadedToy}
            handleEditToy={handleEditToy}
            setNewRating={setNewRating}
          ></EditForm>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ToyDetail;
