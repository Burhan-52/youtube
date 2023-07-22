import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { get_Id_Video_Api } from '../config';

const useId = () => {
    const [watchvedio, setwatchvedio] = useState([]);
    let [searchParams] = useSearchParams();

    const getvedio = async () => {
        try {
            const vedio = await fetch(get_Id_Video_Api(searchParams.get("v")))
            const json = await vedio.json()
            setwatchvedio(json?.items)
        }
        catch (err) {
            console.log("error from videoContainer --> " + err)
        }
    }

    useEffect(() => {
        getvedio()
    }, [searchParams])

    return [watchvedio]
}

export default useId;