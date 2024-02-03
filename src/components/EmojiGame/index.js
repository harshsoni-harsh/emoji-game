import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import NavBar from '../NavBar'

import './index.css'

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    const {emojisList} = props
    this.emojisList = emojisList
    this.state = {score: 0, best: 0, clicked: [], isOver: false}
  }

  shuffledEmojisList = () => this.emojisList.sort(() => Math.random() - 0.5)

  onClick = id => {
    const {clicked, score, best} = this.state
    const isOver = clicked.filter(objId => objId === id).length > 0
    if (!isOver) {
      this.emojisList = this.shuffledEmojisList()
      this.setState(prev => ({clicked: [...prev.clicked, id]}))
      if (score > best) {
        this.setState(prev => ({
          score: prev.score + 1,
          best: prev.score + 1,
        }))
      } else {
        this.setState(prev => ({score: prev.score + 1}))
      }
      if (score + 1 === 12) {
        this.setState({isOver: true})
      }
    } else {
      this.setState({isOver: true})
    }
  }

  playAgain = () => {
    this.setState({score: 0, isOver: false, clicked: []})
  }

  render() {
    const {score, best, isOver} = this.state

    return (
      <div className="body">
        <NavBar score={score} best={best} isOver={isOver} />
        <div className="container">
          {isOver ? (
            <WinOrLoseCard
              bestScore={best}
              playAgain={this.playAgain}
              score={score}
            />
          ) : (
            <ul className="gameDiv">
              {this.emojisList.map(obj => (
                <EmojiCard key={obj.id} obj={obj} onClick={this.onClick} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
