import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export const Hero = () => {
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
      </div>
    </section>
  )
}