import React from 'react';

const VideoDetail = (props) => {
    if(!props.videoItem){
        return <div className="loading-div">Loading...</div>;
    }
    const video = props.videoItem;
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`; 
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-4by3">
                <iframe className="embed-responsive-iframe" src={url}>
                </iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
}

export default VideoDetail;