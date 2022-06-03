import "./SideBarRaw.css";
import React from "react";
import { Avatar } from "@material-ui/core";

function SideBarRaw({ title, src, Icon }) {
  return (
    <div className="sidebarRaw">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default SideBarRaw;
