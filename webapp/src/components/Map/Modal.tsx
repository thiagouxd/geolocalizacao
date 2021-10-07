import ReactModal from 'react-modal'

type Props = {
  showModal: boolean,
  setShowModal: any
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    backgroundColor: 'red',
    transform: 'translate(-50%, -50%)',
  },
};

const Modal = ({ showModal, setShowModal }: Props) => {
  const handleOpenModal = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <div>
      <button onClick={handleOpenModal}>Trigger Modal</button>
      <ReactModal
        style={customStyles}
        isOpen={showModal}
        contentLabel="Minimal Modal Example"
      >
        <button onClick={handleCloseModal}>Close Modal</button>

      </ReactModal>
    </div >
  );
}

export default Modal