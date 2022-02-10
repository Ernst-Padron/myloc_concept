import { useState } from "react"
import { SliderData } from "./SliderData"
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const SlideshowWindow = ({ slides, slidesShow }) => {
  
  const [current, setCurrent] = useState(0)
  const length = slidesShow.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }


  if(!Array.isArray(slidesShow) || slidesShow.length <= 0) {
    return null
  }
  
  return (
    <div className="slideshow__window">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

        {SliderData.map((slide, index) => {
          return (
            <div className={index === current ? 'slide-active' : 'slide'} key={index}>
              {index === current && (<img src={slide.image} alt="Tavel" className="image"/>)}
            </div>
          )
        })}

    </div>
  )
}

export default SlideshowWindow