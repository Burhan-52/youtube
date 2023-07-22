import React from 'react'
import { useState, useEffect } from 'react'
import SearchVedioRes from './SearchVedioRes'
import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { search_Query_Api } from "../config"

const SearchVedio = ({ searchQuery }) => {

  const [searchparams] = useSearchParams()
  const showsearchres = searchparams.get('search')
  const [vediodata, setvediodata] = useState([])


  const getvediodata = async () => {
    try {
      const data = await fetch(search_Query_Api(showsearchres))
      const json = await data.json()
      console.log(json)
      setvediodata(json.items)
    }
    catch (err) {
      console.log("vediodata" + err)
    }
  }

  useEffect(() => {
    getvediodata()
  }, [showsearchres])

  return (

    <div>
      {vediodata.map((data) => {
        return <Link to={"/watch?v=" + data?.id?.videoId}> <SearchVedioRes data={data} /></Link>
      })}
    </div>
  )
}

export default SearchVedio