import { useState } from "react"
import { ScoreComponent } from "./components/ScoreComponent"
import { SelectorGame } from "./components/SelectorGame"
import { ButtonRules } from "./components/ButtonRules"
import { ModalRules } from "./components/ModalRules"
import './App.css'

function App() {

  const [modal, setModal] = useState(false)
  return (
    <main className='main'>
      <ScoreComponent/>
      <SelectorGame/>
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
