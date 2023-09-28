import React from 'react'
import { useSearchParams } from 'react-router-dom'

const SearchVedioRes = ({ data }) => {

  return (
    <div className=' my-5 flex flex-wrap'>

      <div >
        <img
          className='w-[350px] h-[200px] cursor-pointer rounded-xl mt-3' src={data?.snippet?.thumbnails?.medium?.url}
          alt='thumbnails'
        />
      </div>

      <div className='lg:ml-5 mt-2 '>
        <div className='text-lg font-semibold mx-2'>{data?.snippet?.title}</div>

        <div className='flex items-center mt-2 mx-2'>
          <img
            width={30}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Font_Awesome_5_solid_user-circle.svg/1200px-Font_Awesome_5_solid_user-circle.svg.png"
            alt='channel-icon'
          />
          <span className=' mx-2'>{data?.snippet?.channelTitle}</span>
        </div>

        <div className='mt-3 mx-2'>{data?.snippet?.description}</div>
      </div>
    </div>
  )
}

export default SearchVedioRes