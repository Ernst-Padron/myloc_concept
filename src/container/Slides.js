import Slide from "./Slide"

const Slides = ({ slides, onDelete, testOnChange }) => {

  return (
    <>
      {slides.map((slide) => ( 
        <Slide key={slide.id} slide={slide} onDelete={onDelete} testOnChange={testOnChange} />
       //<h2 key={slide.id}>{slide.type}</h2>
      ))}

    </>
  )
}

export default Slides




