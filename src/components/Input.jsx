import { useState } from "react"


export default function Input({ item, changeInput, sendAnswer }) {

  const [inputValue, setInputValue] = useState("")
  const [error, setError] = useState(false)

  function handleChange(e) {
    setError(false)
    if (e.target.checked) {
      setInputValue(true)
      return
    }
    setInputValue(e.target.value)

  }

  function handleNextClick() {
    if (inputValidator()) {
      changeInput(item.name, inputValue)
      setInputValue("")
      return
    }
    setError(true)
  }

  function handleSendClick(e) {
    e.preventDefault()
    sendAnswer()
  }

  function inputValidator() {
    return (item.required && inputValue)
  }

  return (

    <div className="item">
      <label htmlFor={item.name}>
        <b>{item.label}</b>
      </label>
      {item.type === "submit" && <button type={item.type} onClick={handleSendClick}>Enviar respuesta</button>}
      {item.type === "select" && (
        <>
          <select name={item.name} id={item.name} onChange={(e) => handleChange(e)}>
            <option>Selecciona un Pais</option>
            {
              item.options.map((option, i) => <option key={i} value={option.value}>{option.label}</option>)
            }
          </select>
        </>
      )}
      {item.type !== "submit" && item.type !== "select" &&
        <input type={item.type} name={item.name} id={item.name} value={inputValue} onKeyDown={(e) => {
          if (e.key == "Enter") {
            // Prevenir
            e.preventDefault();
            handleNextClick()
          }
        }} onChange={(e) => handleChange(e)} placeholder="Tu respuesta" />
      }
      {item.type !== "submit" &&
        <button type="button" onClick={() => handleNextClick()}>Siguiente</button>
      }
      {
        error && <span>El campo no puede estar vacio</span>
      }
    </div>
  )
}
