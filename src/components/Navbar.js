import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

export default function ButtonAppBar() {
  return (
    <div className="">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className=""
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Link to="/categories" className="links">
            Categories
          </Link>
          <Link to="/products" className="links">
            Products
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
