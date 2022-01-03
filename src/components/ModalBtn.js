const openModal = (isModalOpen, setModalOpen) => {
    setModalOpen(true);
    document.getElementById("modal-wrapper").style.display = "block";
    if (!isModalOpen) {
        document.getElementById("myModal").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
};

const ModalBtn = ({ isModalOpen, setModalOpen } ) => {
    return (
        <>
            <button 
                id="myBtn" 
                className="modalbtn"
                onClick={() => {
                    openModal(isModalOpen, setModalOpen)
                }}
            >
                Just a Modal button, there's nothing here.
            </button>
        </>
    );
}

export default ModalBtn;