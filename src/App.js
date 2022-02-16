import { useState } from "react";
import Header from "./container/Header";
import ConfigPanel from "./container/ConfigPanel";
import SlideshowWindow from "./container/SlideshowWindow";

const App = () => {
  const [slides, setSlides] = useState([
    {
      id: 1,
      format: 'url',
      time: 2,
      url: 'https://myloc.se/wp-content/uploads/2018/05/Myloc-DN-annons.png',
      schema: '',
      file: '',
    },
    {
      id: 2,
      format: 'url',
      time: 4,
      url: 'https://www.cityofmelrose.org/sites/g/files/vyhlif3451/f/uploads/dpw_construction_schedule_2017.jpg',
      schema: '',
      file: '',
    },
    {
      id: 3,
      format: 'url',
      time: 2,
      url: 'https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxN3x8bmF0dXJlfGVufDB8fHx8MTY0NDQxNTM5Nw&ixlib=rb-1.2.1&q=80&w=1080',
      schema: '',
      file: '',
    },
    {
      id: 4,
      format: 'url',
      time: 5,
      url: 'https://images.squarespace-cdn.com/content/v1/5ca5c15429f2cc0845827a9d/1608134380887-9KPHE8RJVKFODF3YTVJ6/DJI_0169-Pano-2.jpg',
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
    console.log(id, changedSlide);
    setSlides(slides.map((slide) => slide.id === id ? changedSlide : slide))
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
      <SlideshowWindow slides={slides} />
    </div>
  );
}

export default App;

// 