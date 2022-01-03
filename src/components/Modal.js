const closeModal = (isModalOpen, setModalOpen) => {
    setModalOpen(false);
    if (!isModalOpen) {
        document.getElementById("myModal").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
};

const closeOutsideClick = event => {
    const modal = document.getElementById("modal-wrapper");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


const Modal = ({ isModalOpen, setModalOpen }) => {
    return (
        <>
            {isModalOpen && (
                <div id="modal-wrapper" onClick={(event) => closeOutsideClick(event)}>
                    <div className="modal-content">
                        <span 
                            className="close"
                            onClick={() => {
                                closeModal(isModalOpen, setModalOpen);
                            }}
                        >
                            x
                        </span>
                        <p>No, this is wrong. Click on the sidebar button to learn more about Elin.</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;