import Slide from "./Slide"
import { useState, useRef, useEffect } from "react"


const Slides = ({ slides, onDelete, testOnChange }) => {


  const data = [
    {"id": 0, "name": "Ernst"}, 
    {"id": 1, "name": "Hugo"}, 
    {"id": 2, "name": "Signe"}, 
    {"id": 3, "name": "Jonathan"}
  ]
  
  const [list, setList] = useState(data); 
  const [dragging, setDragging] = useState(false);

  const dragSlide = useRef()
  const dragNode = useRef()

  /* DragStart */
  const dragStart = (e, peramsIndex) => {
    console.log("Start the drag", peramsIndex);

    
    dragNode.current = e.target
    dragNode.current.addEventListener('dragend', dragEnd)
    dragSlide.current = peramsIndex

    setTimeout(() => {
      setDragging(true)
    }, 0)


  }

  const dragEnter = (e, peramsIndex) => {
    /* console.log("its happening ", peramsIndex); */
    if (e.target !== dragNode.current) {
      console.log("not same");
      setList(oldList => {
        let newList = JSON.parse(JSON.stringify(oldList));
        console.log("parmID", peramsIndex.id, "curId", dragSlide.current.id);
        /* newList.splice(peramsIndex.id, 1, dragSlide.current); */
        [newList[dragSlide.current.id], newList[peramsIndex.id]] = 
          [newList[peramsIndex.id], newList[dragSlide.current.id]];
        [newList[1], newList[2]] = [newList[2], newList[1]];
        
        dragSlide.current = peramsIndex;
        return newList
      })
    }
  }

  const dragEnd = () => {
    console.log('End');

    setDragging(false)
    dragSlide.current = null
    dragNode.current.removeEventListener('dragend', dragEnd)
    dragNode.current = null

  }

  const getStyles = () => {
    return 'current slide'
  }


  return (
    <div >
      {/* Iterating over slides */}
      {list.map((slide) => (

        <div 
          key={slide.id}
          draggable
          onDragStart={(e) => dragStart(e, slide)}
          onDragEnter={dragging ? (e) => { dragEnter(e, slide) } : null} //slide.id
          className={dragging ? getStyles() : "slide"}
        >
          {slide.id}
          {slide.name}

          {/* Ska tillbaka sen */}
          {/* <Slide 
            key={slide.id}
            slide={slide}
            onDelete={onDelete}
            testOnChange={testOnChange} 
          /> */}

        </ div>
        
      ))}

    </ div>
  )
}

export default Slides




