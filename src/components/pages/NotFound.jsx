import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { Box } from "@mui/material";

const NotFound = () => {
  useTitle("404 Page Not Found");

  return (
    <Box>
      <div className="align-items-center justify-content-center min-vh-100">
        <div className="text-center">
          <img
            src="https://i.ibb.co/NVHfWS2/404.jpg"
            alt="404 Page"
            className="w-100"
          />
          <Link to="/" className="btn btn-primary">
            Return To Home
          </Link>
        </div>
      </div>
    </Box>
  );
};

export default NotFound;
