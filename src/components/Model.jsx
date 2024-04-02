import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export const Model = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#heading",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5 }
    )
  }, [])

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look
        </h1>
      </div>
    </section>
  )
}