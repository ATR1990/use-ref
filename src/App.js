import { useRef, useState } from "react"

export const App = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')

  const nameInputRef = useRef()
  const surnameInputRef = useRef()

  const handlerKeyUp = event => {
    if (event.key === 'Enter') {
      surnameInputRef.current.focus()
    }
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        ref={nameInputRef}
        value={name}
        onChange={event => setName(event.target.value)}
        onKeyUp={handlerKeyUp}
      />
      <br/>
      <input
        type="text"
        placeholder="Surname"
        ref={surnameInputRef}
        value={surname}
        onChange={event => setSurname(event.target.value)}
      />
    </form>
  )
}
