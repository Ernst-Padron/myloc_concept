import { useState, useRef } from "react"
import { FaTimes } from "react-icons/fa"
import { FaArrowsAlt } from "react-icons/fa"



const Slide = ({ slide, onDelete, testOnChange }) => {
  const [format, setFormat] = useState(slide.format)
  const [time, setTime] = useState(slide.time)
  const [url, setLink] = useState(slide.url)
  const [schema, setSchema] = useState(slide.schema)
  const [file, setFile] = useState(slide.file)

  const id = slide.id
  const dragSlide = useRef()
  const dragNode = useRef()
  const [dragging, setDragging] = useState(false);

  /* Stopping reload and updating slides */
  const submitBtn = (e) => {
    e.preventDefault()
    const updatedSlide = { id, format, time, url, schema, file }
    testOnChange(slide.id, updatedSlide)

  }

  /* DragStart */
  const dragStart = (e, peramsIndex) => {
    console.log(peramsIndex);
    dragSlide.current = peramsIndex
    dragNode.current = e.target
    dragNode.current.addEventListener('dragend', dragEnd)
    setTimeout(() => {
      setDragging(true)
    }, 0)


  }

  const dragEnd = () => {
    console.log('End');

    setDragging(false)
    dragNode.current.removeEventListener('dragend', dragEnd)
    dragSlide.current = null
    dragNode.current = null

  }

  const dragEnter = (e, peramsIndex) => {
    console.log("its happening ", peramsIndex);
    if (e.target !== dragSlide.current) {
      console.log("not same");
    }
  }

  const getStyles = () => {
    return 'current dragging__icon'
  }


  return (
    <div className="slide">

      <form onSubmit={submitBtn}>
        {/* Format */}
        <label className="label__format">Slide format</label>
        <select name="format" id="format" className="select__format"
          value={format}
          onChange={(e) => setFormat(e.target.value)}>
          <option value="Select">Select</option>
          <option value="url">link</option>
          <option value="schema">schema</option>
          <option value="file">file</option>
        </select>

        {/* Set time */}
        {format !== "Select" ? <div>
          <label className="label__format">Time(s) </label>
          <input
            className="input__format"
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            min="0" max="60" />
        </div> : ''}

        {/* If selected file */}
        {format === "file" ? <div>
          <label className="label__format">File</label>
          <input type="file" // value={file.name} jag tror stringafir
            className="input__format"
            onChange={(e) => setFile(e.target.files[0])} />
        </div> : ''}

        {/* if selected schema */}
        {format === "schema" ? <div>
          <label className="label__format">Date</label>
          <input type="date" name="date" id="date" value={schema}
            className="input__format"
            onChange={(e) => setSchema(e.target.value)} />
        </div> : ''}

        {/* if selected link */}
        {format === "url" ? <div>
          <label className="label__format">Enter URL</label>
          <input type="url" value={url}
            className="input__format"
            onChange={(e) => setLink(e.target.value)} />
        </div> : ''}

        {/* Submit button */}
        <input 
          type="submit" 
          value='Update slide' 
          className="btn btn-block" 
        />

      </form>

      <FaArrowsAlt
        /* className="dragging__icon" */
        draggable
        onDragStart={(e) => dragStart(e, id)}
        onDragEnter={dragging ? (e) => { dragEnter(e, { id }) } : null}
        className={dragging ? getStyles() : "dragging__icon"}
      />

      <FaTimes className="remove__icon" onClick={() => onDelete(slide.id)} />


    </div>
  )
}

export default Slide