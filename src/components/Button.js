function Button({title,value,handleClick}) {
  return (
    <button onClick={handleClick} value={value} className="btns">{title}</button>
  )
}

export default Button