import { useState } from "react";
import Header from "./container/Header";
import ConfigPanel from "./container/ConfigPanel";
import SlideshowWindow from "./container/SlideshowWindow";
import { SliderData } from "./container/SliderData";

const App = () => {
  const [slides, setSlides] = useState([
    {
      id: 1,
      type: 'file',
      time: 5,
      url: 'https://images.unsplash.com/photo-1540206395-68808572332f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxMHx8bmF0dXJlfGVufDB8fHx8MTY0NDQxNTM5Nw&ixlib=rb-1.2.1&q=80&w=1080',
      schema: '',
      file: '',
    },
    {
      id: 2,
      type: 'calender',
      time: 2,
      url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHx8fHwxNjQ0NDE1Mzk3&ixlib=rb-1.2.1&q=80&w=1080',
      schema: '',
      file: '',
    },
    {
      id: 3,
      type: 'calender',
      time: 2,
      url: 'https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxN3x8bmF0dXJlfGVufDB8fHx8MTY0NDQxNTM5Nw&ixlib=rb-1.2.1&q=80&w=1080',
      schema: '',
      file: '',
    },
  ])


  // Delete slide
  const deleteSlide = (id) => {
    setSlides(slides.filter((slide) => slide.id !== id))
  }

  const addSlide = () => {
    const id = Math.floor(Math.random() * 100000) + 1
    const type = ''
    const time = 0
    const emptySlide = { id, type, time }
    setSlides([...slides, emptySlide])
  }
  
  const testChange = (id, changedSlide) => {
    //console.log(id, changedSlide);
    //setSlides(slides.map((slide) => slide.id === id ? slide : slide))
  } 

  return (
    <div className="container">
      <Header />
      <ConfigPanel 
        slides={slides} 
        onDelete={deleteSlide} 
        onAdd={addSlide} 
        testOnChange={testChange}
      />
      <SlideshowWindow slides={slides} slidesShow={SliderData}/>
    </div>
  );
}

export default App;

// 