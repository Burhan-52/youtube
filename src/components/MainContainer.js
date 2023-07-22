import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSearchParams } from 'react-router-dom'
import SearchVedio from './SearchVedio'
import useSearch from '../utils/useSearch'

const MainContainer = () => {
  const [searchparams] = useSearchParams()
  const showsearchres = searchparams.get('search')
  const [searchQuery] = useSearch()

  return (
    <div className='lg:pl-10 pl-5' >
      < ButtonList />
      {!showsearchres && <VideoContainer />}
      {showsearchres && <SearchVedio searchQuery={searchQuery} />}
    </div>
  )
}

export default MainContainer