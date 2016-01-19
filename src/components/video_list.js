import React from 'react';
import VideoListItem from '../components/video_list_item';

const VideoList = ({ videos, onVideoSelect }) => {
  const videoItems = videos.map(video => {
    return (
      <VideoListItem
        key={video.etag}
        video={video}
        onVideoSelect={onVideoSelect} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
// when convert function component to class component remember props need to be changed to this.props
