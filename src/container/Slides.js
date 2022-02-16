import Slide from "./Slide"

const Slides = ({ slides, onDelete, testOnChange }) => {

  return (
    <>
    {/* Iterating over slides */}
      {slides.map((slide) => ( 
        <Slide key={slide.id} slide={slide} onDelete={onDelete} testOnChange={testOnChange} />
      ))}
      
    </>
  )
}

export default Slides




