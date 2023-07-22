const API_KEY = process.env.REACT_APP_API_KEY 
const cors = "https://corsproxy.io/?"

export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + API_KEY

export const SEARCH_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=" + API_KEY

export const comment_Api = (params) => {
    return `https://www.googleapis.com/youtube/v3/commentThreads?&textFormat=plainText&part=snippet,replies&maxResults=100&videoId=${params}&key=` + API_KEY
}

export const search_Query_Api = (showsearchres) => {
    return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${showsearchres}&key=` + API_KEY

}

export const get_Id_Video_Api = (params) => {
    return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${params}&key=` + API_KEY
}

export const search_Suggestion_Api = (searchQuery) => {
    return `${cors}http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=${searchQuery}`
}

export const suggestion_video = (search) => {
    return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${search}&key=` + API_KEY
}
