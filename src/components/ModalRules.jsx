/* eslint-disable react/prop-types */
import rulesGame from '../images/image-rules.svg'
import iconClose from '../images/icon-close.svg'
import '../styles/ModalRules.css'

export const ModalRules = ({modal, activeModal}) => {
  const handleModal = () => {
    activeModal(!modal)
  }
  return (
    <aside className="modalRules">
      <h2>RULES</h2>
      <img src={rulesGame} alt="image-rules" />
      <div onClick={handleModal}>
        <img src={iconClose} alt="icon-close" />
      </div>
    </aside>
  )
}