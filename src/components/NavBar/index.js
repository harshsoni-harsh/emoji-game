// Write your code here.

import './index.css'

const NavBar = props => {
  const {score, best, isOver} = props
  return (
    <div className="navBar">
      <div className="logoDiv">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="logoText">Emoji Game</h1>
      </div>
      <div className="scoreDiv">
        {isOver ? (
          ''
        ) : (
          <>
            <p>Score: {score}</p>
            <p>Top Score: {best}</p>
          </>
        )}
      </div>
    </div>
  )
}

export default NavBar
