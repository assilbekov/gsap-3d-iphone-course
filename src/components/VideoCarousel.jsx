import { hightlightsSlides } from "../constants"

export const VideoCarousel = () => {
  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map(slide => (
          <div key={slide.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video id="video" playsInline preload="auto" muted>
                  <source src={slide.video} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}