import React from 'react';
import Layout from '../components/layout'
import VideoData from '../assets/data/videos'
import Video from '../components/video'
import videosStyles from './videos.module.scss'

const VideosPage = () => {
    return (
        <Layout>
            <div className={videosStyles.videosContainer}>
                {VideoData.map((video) => {
                    return <Video video={video}/>
                })}
            </div>
        </Layout>
    )
}

export default VideosPage;