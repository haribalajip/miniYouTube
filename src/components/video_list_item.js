import React from "react";

const VideoListItem = ({video, onVideoSelect}) => {
  const HandleClick =() =>{
    {onVideoSelect(video)};
  }
  console.log({video});
  return (
    <li className="list-group-item" onClick = {() => onVideoSelect(video)}>
      <div className="video-list media">
        <div className="media-left">
          <image className="media-object" src={video.snippet.thumbnails.default.url}/>
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>

      </div>
    </li>
  )
}

export default VideoListItem;
