import Button from "./Button"
import Slides from "./Slides"

const ConfigPanel = ({ slides, onDelete, onAdd, testOnChange}) => {


  return (
    <div className="config__panel">
        <h1>ConfigPanel</h1>
        <Slides slides={slides} onDelete={onDelete} testOnChange={testOnChange}/>
        <Button text="Add" onClick={onAdd}/>
    </div>
  )
}

export default ConfigPanel 