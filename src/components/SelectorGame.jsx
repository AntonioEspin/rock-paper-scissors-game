// import triangle from '../images/bg-triangle.svg'
import { CircleComponent } from './CircleComponent'
import iconPaper from '../images/icon-paper.svg'
import iconScissors from '../images/icon-scissors.svg'
import iconRock from '../images/icon-rock.svg'
import '../styles/SelectorGame.css'

export const SelectorGame = () => {
  return (
    <section className="selectorGame">
      <div className='containerCircles'>
        <CircleComponent iconImage={iconPaper} />
        <CircleComponent iconImage={iconScissors} />
        <CircleComponent iconImage={iconRock} />
      </div>
    </section>
  )
}