import React from "react";
import "./Header.css";
import {
  Button,
  Container,
  Nav,
  Navbar,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
  const { user, logout } = useContext(UserContext);

  let userName = user?.displayName;
  let userImage = user?.photoURL;

  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((err) => console.log(err));
    Swal.fire({
      position: "bottom-end",
      icon: "success",
      title: "Come Back Soon!",
      showConfirmButton: false,
      timer: 1500,
    });
    localStorage.removeItem("toys-api-access-token");
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="py-3"
    >
      <Container>
        <Navbar.Brand href="/" className="logo fs-1 flex-grow-1">
          akushontoy
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="order-lg-0 order-1 ms-2"
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="order-lg-0 order-1"
        >
          <Nav className="ms-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/toys" className="nav-link">
              Toys
            </NavLink>
            <NavLink to="/blog" className="nav-link">
              Blog
            </NavLink>
            {user && (
              <>
                <NavLink to="/add-toy" className="nav-link">
                  Add Toy
                </NavLink>
                <NavLink to="/my-toys" className="nav-link">
                  My Toys
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
        <div className="mx-2 d-none d-lg-block">|</div>
        <Nav className="align-items-center flex-row">
          {!user ? (
            <>
              <NavLink to="/login" className="nav-link me-lg-0 me-2">
                Login
              </NavLink>
              <NavLink to="/register" className="nav-link">
                Register
              </NavLink>
            </>
          ) : (
            <>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id={`tooltip-${userName}`}>{userName}</Tooltip>
                }
              >
                <img
                  src={
                    userImage
                      ? userImage
                      : "https://i.ibb.co/r5xSR2D/profile.png"
                  }
                  className="profile-image me-2"
                />
              </OverlayTrigger>
              <Button onClick={handleLogOut}>Log Out</Button>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
