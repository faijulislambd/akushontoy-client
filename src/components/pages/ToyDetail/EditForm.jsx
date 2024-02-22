// import { Rate } from "antd";
// import React from "react";
// import { useState } from "react";
// import { Button, Col, Form } from "react-bootstrap";

const EditForm = ({ handleEditToy, toy, setNewRating }) => {
  //   const {
  //     toy_name,
  //     toy_image,
  //     seller_name,
  //     seller_email,
  //     category,
  //     toy_price,
  //     toy_quantity,
  //     toy_description,
  //     toyrating,
  //   } = toy;
  //   return (
  //     <Form onSubmit={handleEditToy}>
  //       <Form.Group className="mb-3" controlId="formPlaintextEmail">
  //         <Form.Label sm="2" className="fs-4">
  //           Toy Name
  //         </Form.Label>
  //         <Col>
  //           <Form.Control
  //             type="text"
  //             defaultValue={toy_name}
  //             name="toy_name"
  //             required
  //           />
  //         </Col>
  //       </Form.Group>
  //       <Form.Group className="mb-3" controlId="formPlaintextEmail">
  //         <Form.Label sm="2" className="fs-4">
  //           Toy Image
  //         </Form.Label>
  //         <Col>
  //           <Form.Control
  //             type="text"
  //             defaultValue={toy_image}
  //             name="toy_image"
  //             required
  //           />
  //         </Col>
  //       </Form.Group>
  //       <Form.Group className="mb-3" controlId="formPlaintextEmail">
  //         <Form.Label sm="2" className="fs-4">
  //           Seller Name
  //         </Form.Label>
  //         <Col>
  //           <Form.Control
  //             type="text"
  //             name="seller_name"
  //             defaultValue={seller_name}
  //             readOnly
  //             disabled
  //           />
  //         </Col>
  //       </Form.Group>
  //       <Form.Group className="mb-3" controlId="formPlaintextEmail">
  //         <Form.Label sm="2" className="fs-4">
  //           Seller Email
  //         </Form.Label>
  //         <Col>
  //           <Form.Control
  //             type="email"
  //             name="seller_email"
  //             defaultValue={seller_email}
  //             readOnly
  //             disabled
  //           />
  //         </Col>
  //       </Form.Group>
  //       <Form.Group className="mb-3" controlId="formPlaintextPassword">
  //         <Form.Label sm="2" className="fs-4">
  //           Category
  //         </Form.Label>
  //         <Col>
  //           <Form.Select name="category" defaultValue={category}>
  //             <option disabled>Select A Category</option>
  //             <option value="avengers">Avengers</option>
  //             <option value="justiceleague">Justice League</option>
  //             <option value="transformers">Transformers</option>
  //             <option value="starwars">Star Wars</option>
  //             <option value="dragonball">Dragon Ball</option>
  //           </Form.Select>
  //         </Col>
  //       </Form.Group>
  //       <Form.Group className="mb-3" controlId="formPlaintextEmail">
  //         <Form.Label sm="2" className="fs-4">
  //           Price(BDT)
  //         </Form.Label>
  //         <Col>
  //           <Form.Control
  //             type="number"
  //             defaultValue={toy_price}
  //             name="toy_price"
  //             required
  //           />
  //         </Col>
  //       </Form.Group>
  //       <Form.Group className="mb-3" controlId="formPlaintextEmail">
  //         <Form.Label sm="2" className="fs-4">
  //           In Stock
  //         </Form.Label>
  //         <Col>
  //           <Form.Control
  //             type="number"
  //             defaultValue={toy_quantity}
  //             name="toy_quantity"
  //             required
  //           />
  //         </Col>
  //       </Form.Group>
  //       <Form.Group className="mb-3" controlId="formPlaintextEmail">
  //         <Form.Label sm="2" className="fs-4">
  //           Describe Your Toy
  //         </Form.Label>
  //         <Col>
  //           <Form.Control
  //             as="textarea"
  //             rows={3}
  //             name="toy_description"
  //             defaultValue={toy_description}
  //             className="rounded-3"
  //             required
  //           />
  //         </Col>
  //       </Form.Group>
  //       <Form.Group className="mb-3" controlId="formPlaintextPassword">
  //         <Form.Label sm="2" className="fs-4">
  //           Rate Your Toy
  //         </Form.Label>
  //         <Col>
  //           <Rate
  //             onChange={(val) => setNewRating(val)}
  //             defaultValue={toyrating}
  //             allowHalf={true}
  //           />
  //         </Col>
  //       </Form.Group>
  //       <Button type="submit" className="btn btn-primary w-100 text-white mt-4">
  //         Update Toy
  //       </Button>
  //     </Form>
  //   );
};

export default EditForm;
