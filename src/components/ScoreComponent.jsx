/* eslint-disable react/prop-types */
import logoImage from '../images/logo.svg'
import { gameLogic } from '../logic/gameLogic'
import '../styles/ScoreComponent.css'
import { useEffect, useState } from 'react'

export const ScoreComponent = ({userSelection, computerSelection, turn}) => {
  const [score, setScore] = useState(0)
  const result = gameLogic(userSelection, computerSelection)

  useEffect(()=>{
    if (result === 'YOU WIN') {
      setScore(prevScore => prevScore + 1)
      return
    } else if (result === 'YOU LOST') {
      setScore(prevScore => prevScore - 1)
      return
    }
  },[result, turn])
  return (
    <section className="container">
      <img src={logoImage} alt="logo" />

      <div className="score">
        <span>SCORE</span>
        <span>{score}</span>
      </div>
    </section>
  )
}