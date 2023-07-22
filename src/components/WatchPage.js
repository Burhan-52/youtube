import React from "react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { closeMenu } from "../utils/store/toggleSlice"
import { useSearchParams } from "react-router-dom"
import { comment } from "../utils/store/commentSlice"
import { namegenerate } from ".././utils/store/helper"
import { makemessagegenerator } from ".././utils/store/helper"
import Suggestionsvideo from "./Suggestionsvideo"
import CommentContainer from "./CommentContainer"
import downarrow from "../assests/down-arrow.png"
import uparrow from "../assests/up-arrow.png"
import { get_Id_Video_Api,comment_Api } from "../config"

const WatchPage = () => {
  const [watchvedio, setwatchvedio] = useState([])
  const [videocomment, setvideocomment] = useState([])
  const [commentmsg, setcommentmsg] = useState("")
  const [toggle, setToggle] = useState(false)
  let [searchParams] = useSearchParams();
  const c = useSelector(store => store.livecomment.mes)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(closeMenu())
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(comment({
        name: namegenerate(),
        desc: makemessagegenerator(10),
      }))
    }, 1500);

    return () => clearInterval(timer)
  }, [])

  const getvedio = async () => {
    try {
      const vedio = await fetch(get_Id_Video_Api(searchParams.get("v")))
      const json = await vedio.json()
      setwatchvedio(json.items)
    }
    catch (err) {
      console.log("error from videoCOntainer --> " + err)
    }
  }

  useEffect(() => {
    getvedio()
  }, [searchParams])

  const fixcomment = async () => {
    try {
      const vedio = await fetch(comment_Api(searchParams.get("v")))
      const json = await vedio.json()
      setvideocomment(json.items)
    }
    catch (err) {
      console.log("error from videoContainer --> " + err)
    }
  }

  const handletoggle = () => {
    setToggle((prev) => !prev)
  }

  useEffect(() => {
    fixcomment()
  }, [])

  const handlesendmes = (e) => {
    e.preventDefault()
    dispatch(comment({
      name: "burhan R",
      desc: commentmsg,
    }))
    setcommentmsg("")
  }

  return (
    <div className="w-full">
      <div className="w-full flex px-4 h-[440px] lg:flex-nowrap flex-wrap">
        <div className="px-5 mt-5">
          <div>
            <iframe className="lg:w-[900px] lg:h-[420px] md:w-[700px] md:h-[420px] w-[330px]  h-[200px]" 
               src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
          </div>

          <div className="mt-3 font-semibold text-xl">{watchvedio[0]?.snippet?.title}</div>
          <div className="flex items-center">
            <img
              className="w-[40px] h-[40px]"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Font_Awesome_5_solid_user-circle.svg/1200px-Font_Awesome_5_solid_user-circle.svg.png"
              alt="channel-icon"
            />
            <div
              className="mt-3 font-bold text-lg ml-5">{watchvedio[0]?.snippet?.channelTitle}
            </div>
            <div className="flex items-center mt-6  text-lg ml-10">
              <img
                width={30}
                src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-like-icon-png-image_695769.jpg"
                alt="like-icon"
              />
              {watchvedio[0]?.statistics?.likeCount}
            </div>
          </div>
          
          <div className="flex justify-between mt-2">
            <div className="text-lg font-semibold">Comment</div>
            {toggle ?
              <img onClick={handletoggle} className="w-8 h-8 cursor-pointer" src={uparrow} alt="down-arrow" /> :
              <img onClick={handletoggle} className="w-10 h-10 cursor-pointer" src={downarrow} alt="down-arrow" />
            }
          </div>
          {toggle ? <CommentContainer /> : ""}
        </div>

        <div className="mt-1  ">
          <p className="text-lg font-semibold">Live comments</p>
          <div className=" flex flex-col-reverse w-full bg-slate-100 h-[405px]  overflow-y-scroll border border-black">

            {c.map((chat) => {
              return (
                <>
                  <div className="flex py-2 mx-2 rounded ">
                    <div className="mx-2 font-bold">{chat?.name}</div>
                    <div className="mx-2">{chat?.desc}</div>
                  </div>
                </>
              )
            })}
          </div>

          <form onSubmit={handlesendmes} className="flex mt-3 ">
            <input
              className="bg-slate-300 px-2 py-1 w-80 rounded-lg mb-3"
              placeholder="Say something..."
              type="text"
              value={commentmsg}
              onChange={(e) => setcommentmsg(e.target.value)} />
            <button className=" mx-2" type="submit">
              <img width={50}
                src="https://w7.pngwing.com/pngs/10/412/png-transparent-computer-icons-send-miscellaneous-angle-rectangle.png"
                alt="send-icon"
              />
            </button>
          </form>
          <Suggestionsvideo />
        </div>
      </div>

    </div>

  )
}

export default WatchPage