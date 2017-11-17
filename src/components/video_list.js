import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = (props)=> {
  const videos = props.videos.map((video)=>{
    return <VideoListItem
      key={video.etag}
      video = {video}
      onVideoSelect = {props.onVideoSelect}/>
  });
  console.log(videos);
  return (
    <div className="col-md-4">
      <ul className="list-group">
        {videos}
      </ul>
    </div>
  )
}

export default VideoList;
