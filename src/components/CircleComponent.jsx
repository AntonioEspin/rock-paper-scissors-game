/* eslint-disable react/prop-types */
import '../styles/CircleComponent.css'

export const CircleComponent = ({iconImage}) => {
  return (
    <div className='backCircle'>
      <article className='circle'>
        <img src={iconImage} alt="icon-paper" />
      </article>
    </div>
  )
}