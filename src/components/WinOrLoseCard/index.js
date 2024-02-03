// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgain} = props
  const imgSrc =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const output = score === 12 ? 'Best Score' : 'Score'
  return (
    <div className="resultCard">
      <div className="resultDiv">
        <h1>You {score === 12 ? 'Won' : 'Lose'}</h1>
        <p>{output}</p>
        <p className="score">{score}/12</p>
        <button type="button" className="playNowBtn" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <img src={imgSrc} className="resultImg" alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
