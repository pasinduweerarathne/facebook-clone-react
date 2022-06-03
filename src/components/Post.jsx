import { Avatar } from "@material-ui/core";
import ThumbUp from "@material-ui/icons/ThumbUp";
import ChatBubbleOutline from "@material-ui/icons/ChatBubbleOutline";
import NearMe from "@material-ui/icons/NearMe";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";
import React from "react";
import "./Post.css";

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post-top">
        <Avatar src={profilePic} className="post-avatar" />
        <div className="post-topInfo">
          <h3>{username}</h3>
          <p>Timestams...</p>
        </div>
      </div>

      <div className="post-bottom">
        <p>{message}</p>
      </div>

      <div className="post-image">
        <img src={image} alt="" />
      </div>

      <div className="post-options">
        <div className="post-option">
          <ThumbUp />
          <p>Like</p>
        </div>
        <div className="post-option">
          <ChatBubbleOutline />
          <p>Comment</p>
        </div>
        <div className="post-option">
          <NearMe />
          <p>Share</p>
        </div>
        <div className="post-option">
          <AccountCircle />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
}

export default Post;
