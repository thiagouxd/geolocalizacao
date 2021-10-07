import ReactModal from 'react-modal'

type Props = {
  showModal: boolean,
  setShowModal: any
}

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
        isOpen={showModal}
        contentLabel="Minimal Modal Example"
      >
        <button onClick={handleCloseModal}>Close Modal</button>

      </ReactModal>
    </div >
  );
}

export default Modal