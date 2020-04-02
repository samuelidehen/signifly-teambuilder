import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import logo from "../../../src/logo.svg";

export default function Navbar() {
  const imgStyle = {
    height: "26px",
    width: "66px",
    marginLeft: "auto",
    transition: "fill .1s ease-in-out"
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="subtitle1" color="inherit">
              SIGNIFLY TEAM BUILDER
            </Typography>
          </Link>
          <img src={logo} style={imgStyle} alt="logo" />
        </Toolbar>
      </AppBar>
    </div>
  );
}
