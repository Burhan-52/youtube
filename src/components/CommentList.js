import React from 'react'
import Comment from './Comment'

const CommentList = ({ comm }) => {
    return comm.map((c) => (
        <>
            <Comment data={c} />
            {
                c.replies?.comments && (
                    <>
                        <div className='ml-20'>
                            <div className=' mt-2 text-lg text-[blue] font-semibold'> replies</div>
                            <div className='pl-5  border-l-2 border-black mt-2'>

                                {c?.replies?.comments[0]?.snippet?.textOriginal}
                            </div>
                        </div>
                    </>
                )
            }

        </>
    ))
}

export default CommentList