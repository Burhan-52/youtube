import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import CommentList from './CommentList'
import { comment_Api } from '../config'

const CommentContainer = () => {
    let [searchParams] = useSearchParams();

    const [videocomment, setvideocomment] = useState([])
    
    const fixcomment = async () => {
        try {
            const vedio = await fetch(comment_Api(searchParams.get("v")))
            const json = await vedio.json()
            setvideocomment(json.items)
        }
        catch (err) {
            console.log("error from videoCOntainer --> " + err)
        }
    }

    useEffect(() => {
        fixcomment()
    }, [searchParams])

    return (
        <CommentList comm={videocomment} />
    )
}

export default CommentContainer