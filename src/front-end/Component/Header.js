import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function HeaderWithSidebar() {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('user'));
    const [sidebarOpen, setSidebarOpen] = useState(false); // Track sidebar state
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        navigate('/signin');
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen); // Toggle sidebar open/close
    };

    return (
        <div className="d-flex">
            {/* Sidebar */}
           

            {/* Main content */}
            <div className="main-content w-100">
                {/* Header */}
                <header className="bg-primary py-2 px-4 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <button className="btn btn-light me-3" onClick={toggleSidebar}>
                            ☰
                        </button>
                        <Link to="/" className="text-decoration-none text-white fs-3 fw-bold">Logo</Link>
                    </div>
                    
                    <div className="d-flex align-items-center">
                       
                        
                      
                        
                        {/* Logout */}
                        <div>
                            {isLoggedIn ? (
                                <button onClick={handleLogout} className="btn btn-light ms-4">
                                    Logout
                                </button>
                            ) : (
                                <Link to="/signin" className="btn btn-light ms-4">
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
                </header>

              
            </div>
        </div>
    );
}

export default HeaderWithSidebar;
