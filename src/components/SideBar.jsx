import Chat from "@material-ui/icons/Chat";
import EmojiFlags from "@material-ui/icons/EmojiFlags";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";
import LocalHospital from "@material-ui/icons/LocalHospital";
import People from "@material-ui/icons/People";
import Storefront from "@material-ui/icons/Storefront";
import VideoLibrary from "@material-ui/icons/VideoLibrary";
import React from "react";
import "./SideBar.css";
import SideBarRaw from "./SideBarRaw";

function SideBar() {
  return (
    <div className="sidebar">
      <SideBarRaw
        title="Pasindu Weeararathne"
        src="https://scontent.fcmb11-1.fna.fbcdn.net/v/t1.6435-9/196436856_1208134566283063_9039649885522793100_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=ryANJ825TbUAX-NSUio&_nc_ht=scontent.fcmb11-1.fna&oh=00_AT9gIiUgBiQh23RDK8H3WDSGjQFpgDPvIYI_OtBdXhKi_w&oe=62BC44BD"
      />
      <SideBarRaw title="COVID-19 Information Center" Icon={LocalHospital} />
      <SideBarRaw title="Pages" Icon={EmojiFlags} />
      <SideBarRaw title="Friends" Icon={People} />
      <SideBarRaw title="Massenger" Icon={Chat} />
      <SideBarRaw title="Marketplace" Icon={Storefront} />
      <SideBarRaw title="Videos" Icon={VideoLibrary} />
      <SideBarRaw title="See more" Icon={ExpandMoreOutlined} />
      <span class="material-icons-outlined">search</span>
    </div>
  );
}

export default SideBar;
