import React from "react";
import "./LoginRegister.css";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { signInUser, signUpWithGithub, signUpWithGoogle } =
    useContext(UserContext);
  useTitle("Login");
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setErrorMessage(null);
    setSuccessMessage(null);
    signInUser(email, password)
      .then((userCredential) => {
        const userName = userCredential.user.displayName;
        const userEmail = userCredential.user.email;
        // setSuccessMessage(`Welcome Back ${userCredential.user.displayName}`);
        console.log(userEmail);
        const loggedinUserData = {
          name: userName,
          email: userEmail,
        };
        fetch("https://akushontoy-server.vercel.app/jwt", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(loggedinUserData),
        })
          .then((req) => req.json())
          .then((data) =>
            localStorage.setItem("toys-api-access-token", data.token)
          );
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Welcome Back!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <Container>
      <Row className="justify-content-center py-6">
        <Col md={4}>
          <h2 className="text-center py-4 fs-3 fw-bold border-0 mb-4">Login</h2>
          <Card className="card-shadow py-4 px-3">
            <Card.Body>
              <Form onSubmit={handleLogIn}>
                <Form.Group className="mb-3" controlId="formPlaintextEmail">
                  <Form.Label sm="2" className="fs-4">
                    Email
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="email@example.com"
                      name="email"
                      required
                    />
                  </Col>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label sm="2" className="fs-4">
                    Password
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Control
                  type="submit"
                  value="Login"
                  className="btn btn-primary w-100"
                />
              </Form>
              <div className="divider" data-text="OR">
                <hr />
              </div>
              <div className="d-flex flex-wrap align-items-center justify-content-center gap-4 social-login">
                <Button
                  to="#"
                  variant="circle-outline"
                  onClick={() => signUpWithGoogle(navigate, from)}
                >
                  <BsGoogle />
                </Button>
                <Button
                  to="#"
                  variant="circle-outline"
                  onClick={() => signUpWithGithub(navigate, from)}
                >
                  <BsGithub />
                </Button>
              </div>
            </Card.Body>
            <Card.Footer className="border-0">
              <small className="text-muted">
                Don't have an account? <Link to="/register">Register</Link>
              </small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
