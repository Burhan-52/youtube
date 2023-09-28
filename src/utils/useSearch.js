import { useDispatch, useSelector } from 'react-redux'
import { chacheResults } from '../utils/store/searchSlice'
import { useState, useEffect } from 'react'
import {search_Suggestion_Api} from '../config'

const useSearch = () => {
    const [searchQuery, setsearchQuery] = useState("")
    const [searchdata, setsearchdata] = useState([])

    const dispatch = useDispatch()
    const chache = useSelector(store => store.search)

    useEffect(() => {

        const timer = setTimeout(() => {
            if (chache[searchQuery]) {
                setsearchdata(chache[searchQuery])
            } else {
                getSearch()
            }
        }, 200)

        return () => {
            clearTimeout(timer)
        }
    }, [searchQuery])

    const getSearch = async () => {
        try {
            const data = await fetch(search_Suggestion_Api(searchQuery))
            const json = await data.json()
            setsearchdata(json[1])
            dispatch(chacheResults({
                [searchQuery]: json[1]
            }))
        }
        catch (err) {
            console.log(err)
        }
    }

    return [searchQuery, setsearchQuery, searchdata]


}

export default useSearch