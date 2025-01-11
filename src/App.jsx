import { useState } from 'react'
import './App.css'
import Modal from './Components/Modal'

function App() {
  const [openModal, setOpenModal] = useState(false)

  const showModal = () => {
    setOpenModal(true)
  }
  return (
      <div className='modal-parent'>
        <h2>This is modal implementation</h2>
        <button onClick={showModal}>Modal</button>
        {openModal && <Modal setOpenModal={setOpenModal} />}
      </div>
  )
}

export default App
