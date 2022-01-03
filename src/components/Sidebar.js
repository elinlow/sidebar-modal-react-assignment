const closeNav = (isSidebarOpen, setSidebarOpen) => {
    setSidebarOpen(false);
    if (isSidebarOpen) {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    } 
};

const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
    return (
        <>
            <div 
                id="mySidebar" 
                className="sidebar"
            >
                <a 
                    className="closebtn" 
                    onClick={() => {
                        closeNav(isSidebarOpen, setSidebarOpen);
                    }}
                >
                    x
                </a>
                <a href="#">About Elin</a>
                <a href="#">Elin's CV</a>
                <a href="#">Elin's Hobbies</a>
                <a href="#">Contact Elin</a>
            </div>
        </>
    );
}

export default Sidebar;