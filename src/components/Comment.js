import React from 'react'

const Comment = ({ data }) => {
    return (
        <div className='flex mt-3 items-start'>
            <img
                width={30}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Font_Awesome_5_solid_user-circle.svg/1200px-Font_Awesome_5_solid_user-circle.svg.png"
                alt='channel-icon'
            />
            <div className='ml-4'> {data?.snippet?.topLevelComment?.snippet?.textOriginal}</div>
        </div>
    )
}

export default Comment