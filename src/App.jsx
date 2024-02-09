import { useState } from "react"
import { ScoreComponent } from "./components/ScoreComponent"
import { SelectorGame } from "./components/SelectorGame"
import { ButtonRules } from "./components/ButtonRules"
import { ModalRules } from "./components/ModalRules"
import './App.css'
import { OptionsSelected } from "./components/OptionsSelected"

function App() {

  const [modal, setModal] = useState(false)
  const [userSelection, setUserSelection] = useState(null)
  const [computerSelection, setComputerSelection] = useState(null)

  const [gameStart, setGameStart] = useState(false)

  console.log(userSelection)
  console.log(computerSelection)
  console.log(gameStart)

  return (
    <main className='main'>
      <ScoreComponent/>
      {
        !gameStart ? 
          <SelectorGame
            setUserSelection={setUserSelection}
            setComputerSelection={setComputerSelection}
            gameStart={gameStart}
            setGameStart={setGameStart}
          />
        :
          <OptionsSelected
            userSelection={userSelection}
            computerSelection={computerSelection}
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
