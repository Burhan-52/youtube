import React from 'react'
import { Link } from 'react-router-dom'

const LiveButton = () => {
  return (
    <Link to={"/live"}><button className='bg-slate-200 py-1 px-3 rounded-md mt-2 mx-6 '>Live</button></Link>

  )
}

export default LiveButton