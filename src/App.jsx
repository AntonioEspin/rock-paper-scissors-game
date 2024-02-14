import { useState } from "react"
import { ScoreComponent } from "./components/ScoreComponent"
import { SelectorGame } from "./components/SelectorGame"
import { ButtonRules } from "./components/ButtonRules"
import { ModalRules } from "./components/ModalRules"
import { OptionsSelected } from "./components/OptionsSelected"
import './App.css'

function App() {

  const [modal, setModal] = useState(false)
  const [userSelection, setUserSelection] = useState(null)
  const [computerSelection, setComputerSelection] = useState(null)
  const [turn, setTurn] = useState(0)
  const [gameStart, setGameStart] = useState(false)

  return (
    <main className='main'>
      <ScoreComponent
        userSelection={userSelection}
        computerSelection={computerSelection}
        turn={turn}
      />
      {
        !gameStart ? 
          <SelectorGame
            setUserSelection={setUserSelection}
            setComputerSelection={setComputerSelection}
            gameStart={gameStart}
            setGameStart={setGameStart}
            setTurn={setTurn}
          />
        :
          <OptionsSelected
            userSelection={userSelection}
            computerSelection={computerSelection}
            gameStart={gameStart}
            setGameStart={setGameStart}
          />
      }
      <ButtonRules
        modal={modal}
        activeModal ={setModal}
      />
      {
        modal &&
        <ModalRules
          modal={modal}
          activeModal={setModal}
        />
      }
    </main>
  )
}

export default App
