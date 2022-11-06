import { useEffect, useRef, useState } from "react"

export const App = () => {
  const [counter, setCounter] = useState(0)

  const ref = useRef()

  useEffect(() => {
    ref.current = {
      counter: 0
    }
  }, [])

  return (
    <>
      <button onClick={() => ref.current.counter++}>
        Вы меня нажали { counter } раз.
      </button>
      <br/>
      <button onClick={() => setCounter(ref.current.counter)}>
        Обновить
      </button>
    </>
  )
}
