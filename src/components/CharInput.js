import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import CharDisplay from './CharDisplay'

const CharInput = () => {
  const [input, setInput] = useState('')
  const [words, setWords] = useState([])

  const onClickAddBtn = () => {
    setWords([...words, input])
    setInput('')
  }

  return (
    <div className="main-container">
      <div className="input-container">
        <h1 className="heading">Character Counter</h1>
        <div>
          <form>
            <input
              className="input-element"
              type="text"
              value={input}
              placeholder="Enter the Characters here"
              onChange={event => {
                setInput(event.target.value)
              }}
            />
            <button
              className="add-btn"
              type="submit"
              onClick={() => {
                onClickAddBtn()
              }}
            >
              Add
            </button>
          </form>
        </div>
      </div>
      <div className="display-container">
        <h1>Count the Characters like a boss</h1>
        <ul className="words-container">
          {words.length === 0 && (
            <img
              className="empty-view"
              alt="no user inputs"
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
            />
          )}
          {words.map(word => (
            <CharDisplay key={uuidv4()} word={word} length={word.length} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CharInput
