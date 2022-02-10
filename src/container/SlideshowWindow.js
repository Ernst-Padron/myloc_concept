import { useState } from "react"
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import Button from "./Button"

const SlideshowWindow = ({ slides }) => {
  
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  const autoPlay = () => {
    console.log("Play");
  }

  if(!Array.isArray(slides) || slides.length <= 0) {
    return null
  }
  
  return (
    <div className="slideshow__window">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

        {slides.map((slide, index) => {
          return (
            <div className={index === current ? 'slide-active' : 'slide'} key={index}>
              {index === current && (<img src={slide.url} alt="Tavel" className="image"/>)}
            </div>
          )
        })}
        {/* temp */}
        <div className="down">
          <Button text="Play" onClick={autoPlay} />
        </div>
        


    </div>
  )
}

export default SlideshowWindow