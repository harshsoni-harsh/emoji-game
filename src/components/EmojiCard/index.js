// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {obj, onClick} = props
  const {emojiUrl, emojiName, id} = obj
  return (
    <li>
      <button type="button" onClick={() => onClick(id)} className="cardBtn">
        <img src={emojiUrl} alt={emojiName} className="cardImg" />
      </button>
    </li>
  )
}

export default EmojiCard
