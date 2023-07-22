import React from 'react';
import VideoCart from './VideoCart';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useVideo from '../utils/useVideo'

const VideoContainer = () => {
    const [youtubevideo] = useVideo()
    const scrollResults = useSelector((store) => store.scroll.scrollresults);
    console.log(scrollResults)

    return (
        <div className='flex flex-wrap mx-6 '>
            {scrollResults.map((video) => {
                return <Link to={"/watch?v=" + video?.id} key={video?.id}>
                    <VideoCart info={video} />
                </Link>
            })}
        </div>
    );
};

export default VideoContainer;

