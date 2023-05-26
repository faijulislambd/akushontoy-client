import React from "react";
import "./AddNewToy.css";
import { useContext } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { UserContext } from "../../../../Providers/AuthProvider";
import { useState } from "react";
import { Rate } from "antd";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";

const AddNewToy = () => {
  const { user } = useContext(UserContext);
  const [toyrating, setToyRating] = useState(0);
  const seller_email = user.email;
  const seller_name = user.displayName
    ? user.displayName
    : user.email.split("@")[0];
  useTitle("Add New Toy");

  const handleAddNewToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const toy_name = form.toy_name.value;
    const toy_image = form.toy_image.value;
    const category = form.category.value;
    const toy_price = parseInt(form.toy_price.value);
    const toy_quantity = parseInt(form.toy_quantity.value);
    const toy_description = form.toy_description.value;

    if (category === "") {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Please Select A Category",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (toy_name.trim() === "") {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Name Field Can't Be Blank",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (toy_description.trim() === "") {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Description Field Can't Be Blank",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (toy_image.trim() === "") {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Image Field Can't Be Blank",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (toy_quantity <= 0) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Quantity Must Be Greater Than 0",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (toy_price <= 0) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Price Must Be Greater Than 0",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    const toy_data = {
      toy_name,
      toy_image,
      seller_email,
      seller_name,
      category,
      toy_price,
      toy_quantity,
      toy_description,
      toyrating,
    };
    console.log(toy_data);
    fetch("https://akushontoy-server.vercel.app/toys", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toy_data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Toy Successfully Added!",
      showConfirmButton: false,
      timer: 1500,
    });
    form.reset();
    setToyRating(0);
  };
  return (
    <Container>
      <Row className="justify-content-center py-6">
        <Col md={6}>
          <h2 className="text-center py-4 fs-3 fw-bold border-0 mb-4">
            Add Your Own Toy!
          </h2>
          <Card className="card-shadow py-4 px-3">
            <Card.Body>
              <Form onSubmit={handleAddNewToy}>
                <Form.Group className="mb-3" controlId="formPlaintextEmail">
                  <Form.Label sm="2" className="fs-4">
                    Toy Name
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Toy Name"
                      name="toy_name"
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPlaintextEmail">
                  <Form.Label sm="2" className="fs-4">
                    Toy Image
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Image URL"
                      name="toy_image"
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPlaintextEmail">
                  <Form.Label sm="2" className="fs-4">
                    Seller Name
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="text"
                      name="seller_name"
                      defaultValue={seller_name}
                      readOnly
                      disabled
                    />
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPlaintextEmail">
                  <Form.Label sm="2" className="fs-4">
                    Seller Email
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="email"
                      name="seller_email"
                      defaultValue={seller_email}
                      readOnly
                      disabled
                    />
                  </Col>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label sm="2" className="fs-4">
                    Category
                  </Form.Label>
                  <Col>
                    <Form.Select name="category" defaultValue="" required>
                      <option value="">Select A Category</option>
                      <option value="avengers">Avengers</option>
                      <option value="justiceleague">Justice League</option>
                      <option value="transformers">Transformers</option>
                      <option value="starwars">Star Wars</option>
                      <option value="dragonball">Dragon Ball</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPlaintextEmail">
                  <Form.Label sm="2" className="fs-4">
                    Price(BDT)
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="number"
                      placeholder="Amount"
                      name="toy_price"
                      defaultValue={0}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPlaintextEmail">
                  <Form.Label sm="2" className="fs-4">
                    In Stock
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="number"
                      placeholder="Available"
                      name="toy_quantity"
                      defaultValue={0}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPlaintextEmail">
                  <Form.Label sm="2" className="fs-4">
                    Describe Your Toy
                  </Form.Label>
                  <Col>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="toy_description"
                      placeholder="Toy Description"
                      className="rounded-3"
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label sm="2" className="fs-4">
                    Rate Your Toy
                  </Form.Label>
                  <Col>
                    <Rate
                      allowHalf={true}
                      onChange={(val) => setToyRating(val)}
                    />
                  </Col>
                </Form.Group>

                <Button
                  type="submit"
                  className="btn btn-primary w-100 text-white mt-4"
                >
                  Add New Toy
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddNewToy;
