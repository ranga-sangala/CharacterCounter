const CharDisplay = props => {
  const {word, length} = props

  return (
    <div>
      <li className="word">
        <p>
          {word}:{length}
        </p>
      </li>
    </div>
  )
}

export default CharDisplay
