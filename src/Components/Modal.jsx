import './Modal.css'

function Modal({ setOpenModal }) {
    return (
        <div className="modal">
            <div className='modal-container'>
                <div className="title">
                    <h3>Are you sure you want to continue?</h3>
                </div>
                <div className="buttons">
                    <button id="cancel" onClick={() => setOpenModal(false)}>Cancel</button>
                    <button id="continue">Continue</button>
                </div>
            </div>
        </div>
    )
}
export default Modal;