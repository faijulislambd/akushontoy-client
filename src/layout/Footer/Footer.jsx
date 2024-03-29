import React from "react";
import "./Footer.css";

import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import {
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { Box } from "@mui/material";
const Footer = () => {
  const location = window.location.href;
  console.log(location);

  return (
    <footer className="bg-dark py-4 text-white">
      <Box>
        <div className="justify-content-center">
          <div md={6}>
            <div className="d-flex align-items-center justify-content-lg-start justify-content-center mb-lg-0 mb-2">
              <div href="/" className="logo fs-4">
                akushontoy
              </div>
              <div className="mx-3 fs-5">|</div>
              <span>All Rights Reserved &copy;2023</span>
            </div>
          </div>
          <div md={6}>
            <div className="d-flex align-items-center gap-3 justify-content-center justify-content-lg-end social-icon-bar">
              <FacebookShareButton url={location}>
                <BsFacebook />
              </FacebookShareButton>
              <TwitterShareButton url={location}>
                <BsTwitter />
              </TwitterShareButton>
              <InstapaperShareButton url={location}>
                <BsInstagram />
              </InstapaperShareButton>
              <LinkedinShareButton url={location}>
                <BsLinkedin />
              </LinkedinShareButton>
            </div>
          </div>
        </div>
      </Box>
    </footer>
  );
};

export default Footer;
