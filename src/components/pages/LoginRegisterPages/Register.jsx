// import React from "react";
// import { useContext } from "react";
// import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { UserContext } from "../../../../Providers/AuthProvider";
// import { BsGithub, BsGoogle } from "react-icons/bs";
// import Swal from "sweetalert2";
// import useTitle from "../../../hooks/useTitle";

const Register = () => {
  //   const { createUser, setUserNameImage, signUpWithGithub, signUpWithGoogle } =
  //     useContext(UserContext);
  //   useTitle("Register");
  //   const navigate = useNavigate();
  //   const location = useLocation();
  //   const from = location.state?.from?.pathname || "/";
  //   const handleRegister = (e) => {
  //     e.preventDefault();
  //     const form = e.target;
  //     const name = form.name.value;
  //     const email = form.email.value;
  //     const password = form.password.value;
  //     const imageURL = form.image.value;
  //     // Start and end metacharacters
  //     const emptyFieldRegEx = /^\s*$/g;
  //     if (emptyFieldRegEx.test(name)) {
  //       Swal.fire({
  //         position: "top-end",
  //         icon: "error",
  //         title: "Name Felid Cannot Be Empty",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //       return;
  //     }
  //     if (emptyFieldRegEx.test(email)) {
  //       Swal.fire({
  //         position: "top-end",
  //         icon: "error",
  //         title: "Email Felid Cannot Be Empty",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //       return;
  //     }
  //     if (emptyFieldRegEx.test(imageURL)) {
  //       Swal.fire({
  //         position: "top-end",
  //         icon: "error",
  //         title: "Image URL Felid Cannot Be Empty",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //       return;
  //     }
  //     if (password.length < 6) {
  //       Swal.fire({
  //         position: "top-end",
  //         icon: "error",
  //         title: "Password Must Be Minimum 6 Characters Long",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //       return;
  //     }
  //     createUser(email, password)
  //       .then((result) => {
  //         const loggedUser = result.user;
  //         setUserNameImage(name, imageURL)
  //           .then(console.log("Display Name & Image Set"))
  //           .catch((error) => console.error(error));
  //         form.reset();
  //         Swal.fire({
  //           position: "top-end",
  //           icon: "success",
  //           title: "Registration Updated!",
  //           showConfirmButton: false,
  //           timer: 1500,
  //         });
  //         navigate("/");
  //       })
  //       .catch((error) => {
  //         Swal.fire({
  //           position: "top-end",
  //           icon: "error",
  //           title: error.message,
  //           showConfirmButton: false,
  //           timer: 1500,
  //         });
  //       });
  //   };
  //   return (
  //     <Container>
  //       <Row className="justify-content-center py-6">
  //         <Col md={4}>
  //           <h2 className="text-center py-4 fs-3 fw-bold border-0 mb-4">
  //             Register
  //           </h2>
  //           <Card className="card-shadow py-4 px-3">
  //             <Card.Body>
  //               <Form onSubmit={handleRegister}>
  //                 <Form.Group className="mb-3" controlId="formPlaintextEmail">
  //                   <Form.Label sm="2" className="fs-4">
  //                     Name
  //                   </Form.Label>
  //                   <Col>
  //                     <Form.Control
  //                       type="text"
  //                       placeholder="Johndoe"
  //                       name="name"
  //                       required
  //                     />
  //                   </Col>
  //                 </Form.Group>
  //                 <Form.Group className="mb-3" controlId="formPlaintextEmail">
  //                   <Form.Label sm="2" className="fs-4">
  //                     Image URL
  //                   </Form.Label>
  //                   <Col>
  //                     <Form.Control
  //                       type="text"
  //                       placeholder="Image URL"
  //                       name="image"
  //                       required
  //                     />
  //                   </Col>
  //                 </Form.Group>
  //                 <Form.Group className="mb-3" controlId="formPlaintextEmail">
  //                   <Form.Label sm="2" className="fs-4">
  //                     Email
  //                   </Form.Label>
  //                   <Col>
  //                     <Form.Control
  //                       type="email"
  //                       placeholder="email@example.com"
  //                       name="email"
  //                       required
  //                     />
  //                   </Col>
  //                 </Form.Group>
  //                 <Form.Group className="mb-3" controlId="formPlaintextPassword">
  //                   <Form.Label sm="2" className="fs-4">
  //                     Password
  //                   </Form.Label>
  //                   <Col>
  //                     <Form.Control
  //                       type="password"
  //                       placeholder="Password"
  //                       name="password"
  //                       required
  //                     />
  //                   </Col>
  //                 </Form.Group>
  //                 <Button
  //                   type="submit"
  //                   className="btn btn-primary w-100 text-white"
  //                 >
  //                   Register
  //                 </Button>
  //               </Form>
  //               <div className="divider" data-text="OR">
  //                 <hr />
  //               </div>
  //               <div className="d-flex flex-wrap align-items-center justify-content-center gap-4 social-login">
  //                 <Button
  //                   variant="circle-outline"
  //                   onClick={() => signUpWithGoogle(navigate, from)}
  //                 >
  //                   <BsGoogle />
  //                 </Button>
  //                 <Button
  //                   variant="circle-outline"
  //                   onClick={() => signUpWithGithub(navigate, from)}
  //                 >
  //                   <BsGithub />
  //                 </Button>
  //               </div>
  //             </Card.Body>
  //             <Card.Footer className="border-0">
  //               <small className="text-muted">
  //                 Already have an account? <Link to="/login">Login</Link>
  //               </small>
  //             </Card.Footer>
  //           </Card>
  //         </Col>
  //       </Row>
  //     </Container>
  //   );
};

export default Register;
