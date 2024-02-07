import logoImage from '../images/logo.svg'
import '../styles/ScoreComponent.css'

export const ScoreComponent = () => {
  return (
    <section className="container">
      <img src={logoImage} alt="logo" />

      <div className="score">
        <span>SCORE</span>
        <span>12</span>
      </div>
    </section>
  )
}