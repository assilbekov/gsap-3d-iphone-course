import { useEffect, useRef, useState } from "react"
import { hightlightsSlides } from "../constants"
import gsap from "gsap";
import { pauseImg, playImg, replayImg } from "../utils";

export const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  })
  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;
  const { loadedData, setLoadedData } = useState([]);

  const handleProcess = (type, i) => {
    switch(type) {
      case "video-end":
        setVideo(prevVideo => ({
          ...prevVideo,
          isEnd: true,
          videoId: i + 1
        }))
        break;
      case "video-last":
        setVideo(prevVideo => ({
          ...prevVideo,
          isLastVideo: true,
        }))
        break;
      case "video-reset":
        setVideo(prevVideo => ({
          ...prevVideo,
          isLastVideo: false,
          videoId: 0,
        }))
        break;
      case "play":
        setVideo(prevVideo => ({
          ...prevVideo,
          isPlaying: !prevVideo.isPlaying,
        }))
        break;
      case "pause":
        setVideo(prevVideo => ({
          ...prevVideo,
          startPlay: false,
          isPlaying: false,
        }))
        break;
    }
  }

  useEffect(() => {
    if (loadedData.length === hightlightsSlides.length) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();;
      } else if (startPlay) {
        videoRef.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData])

  useEffect(() => {
    const currentProgress = 0;
    let span = videoSpanRef.current;

    if (span[videId]) {
      let animation = gsap.to(span[videId], {
        duration: 10,
        width: "100%",
        ease: "linear",
        onUpdate: () => { },
        onComplete: () => {
          setVideo({
            ...video,
            isEnd: true,
          })
        }
      })
    }
  }, [videoId, startPlay])

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map(slide => (
          <div key={slide.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  ref={el => videoRef.current[i] = el}
                  playsInline
                  preload="auto"
                  muted
                  onPlay={() => setVideo(prevVideo => ({
                    ...prevVideo,
                    isPlaying: true,
                  }))}
                >
                  <source src={slide.video} type="video/mp4" />
                </video>
              </div>

              <div className="absolute top-12 left-[5%] z-10">
                {slide.textLists.map(text => (
                  <p key={text} className="text-white md:text-2xl text-xl font-medium">{text}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              ref={el => videoDivRef.current[i] = el}
              className="mx-2 h-3 w-3 rounded-full bg-gray-200 relative cursor-pointer"
            >
              <span className="absolute h-full w-full rounded-full" ref={el => videoSpanRef.current[i] = el} />
            </span>
          ))}
        </div>

        <button className="control-btn">
          <img 
          src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg} 
          alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"} 
          onClick={isLastVideo ? 
            () => handleProcess("video-reset") :
            !isPlaying ? 
              () => handleProcess("play") :
              () => handleProcess("pause")
          }
          />
        </button>
      </div>
    </>
  )
}