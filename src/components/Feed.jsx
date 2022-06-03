import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

function Feed() {
  return (
    <div className="feed">
      {/* storyReel */}
      <StoryReel />
      {/* messageSender */}
      <MessageSender />
      {/* post */}
      <Post
        profilePic="https://scontent.fcmb11-1.fna.fbcdn.net/v/t1.6435-9/196436856_1208134566283063_9039649885522793100_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=ryANJ825TbUAX-NSUio&_nc_ht=scontent.fcmb11-1.fna&oh=00_AT9gIiUgBiQh23RDK8H3WDSGjQFpgDPvIYI_OtBdXhKi_w&oe=62BC44BD"
        message="Hey this is the fist post"
        timestamp="this is a timestam"
        username="Pasindu Weerarathne"
        image="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg"
      />
    </div>
  );
}

export default Feed;
