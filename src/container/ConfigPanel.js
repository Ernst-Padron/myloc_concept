import Button from "./Button"
import Slides from "./Slides"

const ConfigPanel = ({ slides, onDelete, onAdd, testOnChange }) => {


  return (
    <div className="config__panel">
      <Slides slides={slides} onDelete={onDelete} testOnChange={testOnChange} />
      <Button text="Add" onClick={onAdd} giveName="add__btn btn"/>
    </div>
  )
}

export default ConfigPanel 