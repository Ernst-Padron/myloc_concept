import { useState } from "react"
import { FaTimes } from "react-icons/fa"


const Slide = ({ slide, onDelete, testOnChange}) => {
  const [format, setFormat] = useState('')
  const [time, setTime] = useState('')
  const [link, setLink] = useState('')
  const [schema, setSchema] = useState('')
  const [file, setFile] = useState('')
  
  /* Ska tas bort */
  const submitBtn = (e) => {
    e.preventDefault()
  }

  
  return (
    <div className="slide" onChange={() => testOnChange(slide.id ,link)}>
      <h3>Type: {slide.type}</h3>
      <p>Time: {slide.time} , Id: {slide.id} </p>
      <FaTimes onClick={() => onDelete(slide.id)} />
      
      <form>
        {/* Format */}
        <label>Slide format </label>
        <select name="format" id="format" 
          value={format} 
          onChange={(e) => setFormat(e.target.value)}>
            <option value="">Select</option>
            <option value="link">link</option>
            <option value="schema">schema</option>
            <option value="file">file</option>
        </select>

        {format !== "" ? <div>
            <label>Time (s) </label>
            <input 
              type="number" 
              value={time} 
              onChange={(e) => setTime(e.target.value)} 
              min="0" max="10" />
        </div> : ''}

        {/* If selected file */}
        {format === "file" ? <div>
            <label>File </label>
            <input type="file" value={file} 
              onChange={(e) => setFile(e.target.value)} />
        </div> : ''}

        {/* if selected schema */}
        {format === "schema" ? <div>
            <label>date </label>
            <input type="date" name="date" id="date" value={schema} 
              onChange={(e) => setSchema(e.target.value)} />
        </div> : ''}

        {/* if selected link */}
        {format === "link" ? <div>
            <label>Enter URL </label>
            <input type="url" value={link} 
              onChange={(e) => setLink(e.target.value)} />
        </div> : ''}  

        {/* Ska tas bort */}
        {/* <input type="submit" value='Save Task' className="btn btn-block" /> */}

      </form>
      
    </div>
  )
}

export default Slide