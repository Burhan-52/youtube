import React, { useState, useEffect } from 'react'
import Suggestionlist from './Suggestionlist';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { get_Id_Video_Api } from '../config';
import {suggestion_video} from "../config"

const Suggestionsvideo = () => {
    const [suggestionvideo, setsuggestionvideo] = useState([])
    const [watchvedio, setwatchvedio] = useState([])

    const [searchParams] = useSearchParams()
    const getvedio = async () => {
        try {
            const vedio = await fetch(get_Id_Video_Api(searchParams.get("v")))
            const json = await vedio.json()
            setwatchvedio(json?.items)
        }
        catch (err) {
            console.log("error from videoCOntainer --> " + err)
        }
    }
    useEffect(() => {
        getvedio()
    }, [searchParams])


    const getvediodata = async () => {
        try {
            if (watchvedio.length > 0) {
                const search = watchvedio[0]?.snippet?.tags[0]
                const data = await fetch(suggestion_video(search))
                const json = await data.json()
                setsuggestionvideo(json.items)
            }
        }
        catch (err) {
            console.log("vediodata" + err)
        }
    }

    useEffect(() => {
        getvediodata()

    }, [watchvedio])

    return (
        <div>
            {suggestionvideo.map((data) => {
                return <Link to={"/watch?v=" + data?.id?.videoId}> <Suggestionlist data={data} /></Link>
            })}
        </div>

    )
}

export default Suggestionsvideo