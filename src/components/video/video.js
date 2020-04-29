import React from 'react';
import videoStyles from './video.module.scss'

const Video = ({ video }) => {
    return (
        <div className={videoStyles.videoContainer}>
            <iframe 
                // width="560" 
                // height="315" 
                title={video.title}
                src={video.url} 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
        </div>
    )
}

export default Video;