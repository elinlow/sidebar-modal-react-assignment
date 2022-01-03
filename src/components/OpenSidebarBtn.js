const openNav = (isSidebarOpen, setSidebarOpen) => {
    setSidebarOpen(true);
    if (!isSidebarOpen) {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
};

const OpenSidebarBtn = ({ isSidebarOpen, setSidebarOpen }) => {
    return (
        <>
            <button 
                className="openbtn" 
                onClick={() => {
                    openNav(isSidebarOpen, setSidebarOpen)
                }}
            >
                Open Sidebar
            </button>
        </>
    )
} 

export default OpenSidebarBtn;