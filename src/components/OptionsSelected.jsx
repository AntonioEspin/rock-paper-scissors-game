/* eslint-disable react/prop-types */
import { CircleComponent } from "./CircleComponent"
import { gameLogic } from "../logic/gameLogic"
import iconPaper from '../images/icon-paper.svg'
import iconScissors from '../images/icon-scissors.svg'
import iconRock from '../images/icon-rock.svg'
import '../styles/OptionsSelected.css'

export const OptionsSelected = ({userSelection, computerSelection, gameStart, setGameStart}) => {

  const result = gameLogic(userSelection, computerSelection)

  const handleResetGame = () => {
    setGameStart(!gameStart)
  }

  let userOption
  let computerOption

  if (userSelection === 'paper') {
    userOption = <CircleComponent iconImage={iconPaper} value='paper'/>
  } else if (userSelection === 'scissors') {
    userOption = <CircleComponent iconImage={iconScissors} value='scissors'/>
  } else {
    userOption = <CircleComponent iconImage={iconRock} value='rock'/>
  }

  if (computerSelection === 'paper') {
    computerOption = <CircleComponent iconImage={iconPaper} value='paper'/>
  } else if (computerSelection === 'scissors') {
    computerOption = <CircleComponent iconImage={iconScissors} value='scissors'/>
  } else {
    computerOption = <CircleComponent iconImage={iconRock} value='rock'/>
  }

  return (
    <section className="optionsContainer">
      <div className="user">
        {userOption}
        <span>YOU PICKED</span>
      </div>
      <div className="computer">
        {computerOption}
        <span>THE HOUSE PICKED</span>
      </div>

      <div className="results">
        <span>{result}</span>
        <button onClick={handleResetGame}>PLAY AGAIN</button>
      </div>
    </section>
  )
}