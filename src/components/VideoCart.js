import React from 'react'

const VideoCart = ({ info }) => {

    return (
        <div className='flex px-3'>
            <div className='w-full ' >
                <img
                    className=' w-full  cursor-pointer rounded-xl mt-3' src={info?.snippet?.thumbnails?.medium?.url}
                    alt='video-thumbnails'
                />
                <div className='flex items-start mt-2' >
                    <div>
                        <img
                            width={30}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Font_Awesome_5_solid_user-circle.svg/1200px-Font_Awesome_5_solid_user-circle.svg.png"
                            alt='channel-icon'
                        />
                    </div>
                    
                    <div className=' mx-2'>
                        <div className='w-[17rem] font-semibold'>{(info?.snippet?.localized?.title).slice(1, 70) + "..."}</div>
                        <div>{info?.snippet?.channelTitle}</div>
                        <div>{info?.statistics?.viewCount} Views</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCart