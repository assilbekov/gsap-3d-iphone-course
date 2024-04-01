import gsap from "gsap"
import { useEffect, useState } from "react"
import { useGSAP } from "@gsap/react"
import { heroVideo, smallHeroVideo } from "../utils"

export const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = () => {
    setVideoSrc(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
  }

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet)

    return () => window.removeEventListener("resize", handleVideoSrcSet)
  }, [])

  useGSAP(() => {
    gsap.to("#hero", {
      duration: 1,
      opacity: 1,
      delay: 0.5,
    })
  }, [])

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">Iphone 15 Pro</p>

        <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}