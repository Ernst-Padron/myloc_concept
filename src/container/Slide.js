import { useState } from "react"
import { FaTimes } from "react-icons/fa"


const Slide = ({ slide, onDelete, testOnChange}) => {
  const [format, setFormat] = useState(slide.format)
  const [time, setTime] = useState(slide.time)
  const [url, setLink] = useState(slide.url)
  const [schema, setSchema] = useState(slide.schema)
  const [file, setFile] = useState(slide.file)

  const id = slide.id
  
  /* Stopping reload and updating slides */
  const submitBtn = (e) => {
    e.preventDefault()
    const updatedSlide = {id, format, time, url, schema, file}
    testOnChange(slide.id ,updatedSlide)
    
  }

  
  return (
    <div className="slide">
      <h3>Type: {format}</h3>
      <p>Time: {time} , Id: {id} </p>
      <FaTimes onClick={() => onDelete(slide.id)} />
      
      <form onSubmit={submitBtn}>
        {/* Format */}
        <label>Slide format </label>
        <select name="format" id="format" 
          value={format} 
          onChange={(e) => setFormat(e.target.value)}>
            <option value="">Select</option>
            <option value="url">link</option>
            <option value="schema">schema</option>
            <option value="file">file</option>
        </select>

        {/* Set time */}
        {format !== "" ? <div>
            <label>Time (s) </label>
            <input 
              type="number" 
              value={time} 
              onChange={(e) => setTime(e.target.value)} 
              min="0" max="60" />
        </div> : ''}

        {/* If selected file */}
        {format === "file" ? <div>
            <label>File </label>
            <input type="file" // value={file.name} jag tror stringafir
              onChange={(e) => setFile(e.target.files[0]) } />
        </div> : ''}

        {/* if selected schema */}
        {format === "schema" ? <div>
            <label>date </label>
            <input type="date" name="date" id="date" value={schema} 
              onChange={(e) => setSchema(e.target.value)} />
        </div> : ''}

        {/* if selected link */}
        {format === "url" ? <div>
            <label>Enter URL </label>
            <input type="url" value={url} 
              onChange={(e) => setLink(e.target.value)} />
        </div> : ''}  

        {/* Submit button */}
        <input type="submit" value='Update slide' className="btn btn-block" />

      </form>
      
    </div>
  )
}

export default Slide