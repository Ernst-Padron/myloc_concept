import { useState, useEffect, useRef } from "react"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import Button from "./Button"

const SlideshowWindow = ({ slides }) => {

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  /* -- WIP image sizing --  */

  /* ---------------------- */

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
    const play = () => {
      autoPlayRef.current()
    }
    // console.log("time intervals: " + slides[current].time + "s");
    const intervals = setInterval(play, 1000 * slides[current].time)
    return () => clearInterval(intervals)
  }, [slides[current].time])

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
        const img = new Image();
        const imageUrl = slide.url
        img.src = imageUrl;

        /* img.onload = () => {
          console.log("image Id " + index + " dim: H = " + img.height + " W = " + img.width);
        }; */

        // bad scaling 
        const imgK = img.width > img.height ? (1920 / img.width) : (1080 / img.height);
        const imgW = imgK * img.width > (window.innerWidth - 0) ? window.innerWidth / (imgK * img.width) * (imgK * img.width) : (imgK * img.width);
        const imgH = imgK * img.height > (window.innerHeight - 0) ? window.innerHeight / (imgK * img.width) * (imgK * img.width) : (imgK * img.width);

        // console.log("image Id " + index + " dim: H = " + img.height + " W = " + img.width);
        // console.log("image Id " + index + " dim: H = " + imgH + " W = " + imgW + " K = " + imgK);

        return (

          <div className={index === current ? 'slide__img active' : 'slide__img'} key={index}>
            {index === current && (
              <img
                className="image"
                src={img.src}
                style={{
                  width: imgW * 0.7, // img.width * 0.80
                  height: imgH * 0.7, // img.height* 0.50
                }}
                alt="Tavel"
              />
            )}
          </div>
        )
      })}

      {/* temp for practical styling */}
      <div className="down">
        <Button text="Get JSON" onClick={autoPlay} />
      </div>


    </section>
  )
}

export default SlideshowWindow