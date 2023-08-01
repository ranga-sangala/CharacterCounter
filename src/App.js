import {useState} from 'react'
import CharInput from './components/CharInput'

import './App.css'

// Replace your code here
const App = () => {
  const [count] = useState(0)

  return (
    <>
      <CharInput />
      {count}
    </>
  )
}

export default App
