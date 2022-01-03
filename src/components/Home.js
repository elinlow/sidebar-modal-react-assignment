import OpenSidebarBtn from "./OpenSidebarBtn";
import Sidebar from "./Sidebar";
import Modal from "./Modal";
import { useState } from 'react';
import ModalBtn from './ModalBtn';

function Home() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className="App">
            <h2>To learn more about Elin:</h2>
            <p>Click on the sidebar button.</p>
            
            <OpenSidebarBtn isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
            <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
            <ModalBtn isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
            <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
        </div>
    );
}

export default Home;