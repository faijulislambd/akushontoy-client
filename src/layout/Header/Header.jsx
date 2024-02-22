import "./Header.css";
import { useContext, useState } from "react";
import { UserContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import {
  AppBar,
  Box,
  Divider,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";

const Header = ({ window }) => {
  const { user, logout } = useContext(UserContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(0);
  const handleMobileToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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

  const menuItems = (
    <>
      <Tab>
        <Link to="/">Home</Link>
      </Tab>
      <Tab>
        <Link to="/toys">Toys</Link>
      </Tab>
      <Tab>
        <Link to="/blog">Blog</Link>
      </Tab>
      {user && (
        <>
          <Tab>
            <Link to="/add-toy"> Add Toy</Link>
          </Tab>
          <Tab>
            <Link to="/my-toys"> My Toys</Link>
          </Tab>
        </>
      )}
    </>
  );

  const authMenu = `{!user ? (
    <>
      <Tab to="/login" className="nav-Link me-lg-0 me-2">
        Login
      </Tab>
      <Tab to="/register" className="nav-Link">
        Register
      </Tab>
    </>
  ) : (
    <>
      <OverlayTrigger
        placement="bottom"
        overlay={
          <Tooltip id={tooltip-${userName}}>{userName}</Tooltip>
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
  )}`;

  return (
    <AppBar>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Tabs
            indicatorColor="white"
            textColor="inherit"
            value={activeMenu}
            onChange={(e, val) => {
              setActiveMenu(val);
            }}
          >
            <Tab label="Home"></Tab>
            <Tab label="Toys"></Tab>
            <Tab label="Blog"></Tab>
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
