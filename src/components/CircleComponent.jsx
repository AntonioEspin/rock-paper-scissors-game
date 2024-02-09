/* eslint-disable react/prop-types */
import '../styles/CircleComponent.css'

export const CircleComponent = ({iconImage, value, handleSelection = ()=>{}}) => {
  const getValue = () => {
    handleSelection(value)
  }
  return (
    <div className='backCircle' onClick={getValue} data-option={value}>
      <article className='circle'>
        <img src={iconImage} alt="icon-paper" />
      </article>
    </div>
  )
}