/* eslint-disable react/prop-types */
import '../styles/ButtonRules.css'

export const ButtonRules = ({modal, activeModal}) => {
  const handleModal = () => {
    activeModal(!modal)
  }
  return (
    <section className="buttonRules">
      <button onClick={handleModal}>Rules</button>
    </section>
  )
}