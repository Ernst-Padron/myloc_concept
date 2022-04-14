import { useState, useEffect, useRef } from "react"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import Button from "./Button"

const SlideshowWindow = ({ slides }) => {

  const [current, setCurrent] = useState(0);
  const length = slides.length;


  /* chancing slides */
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };


  /* AutoPlay functionality  */
  const autoPlayRef = useRef()

  useEffect(() => {
    autoPlayRef.current = nextSlide
  })

  useEffect(() => {
    if (length === 0 || slides === null) {
      return () => null;
    } 
    
    const play = () => {
      autoPlayRef.current()
    }
    // console.log("time intervals: " + slides[current].time + "s");
    
    const currentSlideTime = slides[current].time;
    // console.log("time intervals: " + currentSlideTime + "s");
    const intervals = setInterval(play, 1000 * currentSlideTime)
    return () => clearInterval(intervals)
  }, [slides[current]]) // slides[current].time

  const autoPlay = () => {
    console.log(slides);

  }

  /* stop */
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slideshow__window">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

      {slides.map((slide, index) => {
        /* Se vilket format det är */
        if (index === current) {
          switch(slide.format) {
            case "url":
              /* Vill se om det är en giltig url */
              break;
            case "file":
              /* Obs inte all för laddas upp. Måste se så ingen introng. 
                Se det olika till låtna formaten 
              */
              break;
            case "schema":
              /* Jag måste titta nogrant på hur dem har gjort */
              break;
            default:
          }
          
        }

        return (
          <div className={index === current ? 'slide__img active' : 'slide__img'} key={index}>
            {index === current && (
              <img
                className="image"
                src={slide.url}
                style={{
                  
                }}
                alt="Tavel"
              />
            )}
          </div>
        )
      })}

      {/* temp for practical styling */}
      {/* <div className="down">
        <Button text="Get JSON" onClick={autoPlay} />
      </div> */}


    </section>
  )
}

export default SlideshowWindow

