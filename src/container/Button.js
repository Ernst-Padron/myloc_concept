
const Button = ({ onClick, text, giveName }) => {

  return (
    <button className={giveName} onClick={onClick}>{text}</button>
  )
}

export default Button