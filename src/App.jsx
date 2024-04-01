import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Weather from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Weather</h1>
      <Weather/>
    </>
  )
}

export default App
