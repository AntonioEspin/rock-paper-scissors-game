/* eslint-disable react/prop-types */
// import triangle from '../images/bg-triangle.svg'
import { CircleComponent } from './CircleComponent'
import iconPaper from '../images/icon-paper.svg'
import iconScissors from '../images/icon-scissors.svg'
import iconRock from '../images/icon-rock.svg'
import '../styles/SelectorGame.css'

export const SelectorGame = ({setUserSelection, setComputerSelection, gameStart, setGameStart, setTurn}) => {

    const handleSelection = (value) => {
      const optionsGame = ['paper', 'rock', 'scissors']
      const randomOption = Math.floor(Math.random()* optionsGame.length)
      const valueComputer = optionsGame[randomOption]
      setUserSelection(value)
      setComputerSelection(valueComputer)
      setGameStart(!gameStart)
      setTurn(preValue => preValue + 1)
    }

  return (
    <section className="selectorGame">
      <div className='containerCircles'>
        <CircleComponent
          iconImage={iconPaper}
          value={'paper'}
          handleSelection={handleSelection} 
        />
        <CircleComponent
          iconImage={iconScissors}
          value={'scissors'}
          handleSelection={handleSelection}
        />
        <CircleComponent
          iconImage={iconRock}
          value={'rock'}
          handleSelection={handleSelection}
        />
      </div>
    </section>
  )
}