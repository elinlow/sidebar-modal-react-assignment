const closeModal = (isModalOpen, setModalOpen) => {
    setModalOpen(false);
    if (isModalOpen) {
        document.getElementById("myModal").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
};


const Modal = ({ isModalOpen, setModalOpen }) => {
    return (
        <>
            {isModalOpen && (
                <div className="modal-content">
                    <span 
                        className="close"
                        onClick={() => {
                            closeModal( isModalOpen, setModalOpen);
                        }}
                    >
                        x
                    </span>
                    <p>No, this is wrong. Click on the sidebar button to learn more about Elin.</p>
                </div>
            )}
        </>
    );
}

export default Modal;