import {useState} from 'react'
import CharInput from './components/CharInput'
import CharDisplay from './components/CharDisplay'

import './App.css'

// Replace your code here
const App = () => {
  const [count] = useState(0)

  return (
    <>
      <CharDisplay />
      <CharInput />
      {count}
    </>
  )
}

export default App
