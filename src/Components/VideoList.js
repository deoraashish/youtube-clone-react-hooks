import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {

    const renderedList = videos.map(v => {
        return (
        <VideoItem
        key={v.id.videoId} 
        video={v}
        onVideoSelect={onVideoSelect}
        />);
    });

    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    );
}

export default VideoList;