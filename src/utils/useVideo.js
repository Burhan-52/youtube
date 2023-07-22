import { useState, useEffect } from "react";
import { YOUTUBE_VIDEO_API } from "../config";
import { useDispatch } from "react-redux";
import { infinitescroll } from "./store/scrollSlice";

const useVideo = () => {
    const [youtubevideo, setyoutubeVideo] = useState([]);
    const dispatch = useDispatch()

    const fetchData = async () => {
        try {
            const response = await fetch(YOUTUBE_VIDEO_API);
            const json = await response.json();
            setyoutubeVideo(json.items);
            dispatch(infinitescroll(json.items))
        } catch (err) {
            console.log("Error from videoContainer -->", err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 1 >
            document.documentElement.scrollHeight
            // document.documentElement.offsetHeight
        ) {
            // Reached the bottom of the page, fetch more data
            fetchData();
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    },);

    return [youtubevideo];
};

export default useVideo;
