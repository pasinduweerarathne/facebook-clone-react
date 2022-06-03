import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import "./Header.css";
import Search from "@material-ui/icons/Search";
import Home from "@material-ui/icons/Home";
import Flag from "@material-ui/icons/Flag";
import Subscriptions from "@material-ui/icons/Subscriptions";
import StorefrontOutlined from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircle from "@material-ui/icons/SupervisedUserCircle";
import Add from "@material-ui/icons/Add";
import Forum from "@material-ui/icons/Forum";
import NotificationsActive from "@material-ui/icons/NotificationsActive";
import ExpandMore from "@material-ui/icons/ExpandMore";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img src="images/facebook_logo.png" alt="" />
        <div className="header-input">
          <Search />
          <input type="text" placeholder="Search facebook" />
        </div>
      </div>

      <div className="header-center">
        <div className="header-option header-op-active">
          <Home fontSize="large" />
        </div>
        <div className="header-option">
          <Flag fontSize="large" />
        </div>
        <div className="header-option">
          <Subscriptions fontSize="large" />
        </div>
        <div className="header-option">
          <StorefrontOutlined fontSize="large" />
        </div>
        <div className="header-option">
          <SupervisedUserCircle fontSize="large" />
        </div>
      </div>

      <div className="header-right">
        <div className="header-info">
          <Avatar />
          <h4>Pasindu Weerarathne</h4>
        </div>

        <IconButton>
          <Add />
        </IconButton>
        <IconButton>
          <Forum />
        </IconButton>
        <IconButton>
          <NotificationsActive />
        </IconButton>
        <IconButton>
          <ExpandMore />
        </IconButton>
        <IconButton></IconButton>
      </div>
    </div>
  );
}

export default Header;
