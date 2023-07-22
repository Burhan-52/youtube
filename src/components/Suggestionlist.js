import React from 'react'
import { useSearchParams } from 'react-router-dom';

const Suggestionlist = ({ data }) => {
    let [searchParams] = useSearchParams();
    return (
        <div className='flex mb-3'>
            <div>
            <img
                    className=' w-[300px] h-[100px]  cursor-pointer rounded-xl mt-3' src={data?.snippet?.thumbnails?.medium?.url}
                    alt='thumbnails'
                />
               
            </div>
            <div className='mx-2 my-4'>
                {(data?.snippet?.title).slice(0, 45) + "..."}
            </div>
        </div>
    )
}

export default Suggestionlist