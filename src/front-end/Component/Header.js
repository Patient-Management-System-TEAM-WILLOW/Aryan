import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../Component/Header.css'; // Assume this is where you style the header/sidebar

function HeaderWithSidebar() {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('user'));
    const navigate = useNavigate();

    const userFirstName = localStorage.getItem('userFirstName') || "Guest";

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('userFirstName');
        setIsLoggedIn(false);
        navigate('/signin');
    };

    return (
        <>
            {isLoggedIn && (
                <div className="d-flex">
                    {/* Sidebar */}
                    <div className="sidebar bg-light">
                        {/* Logo at the top of the sidebar */}
                        <div className="text-center p-3">
                            <img src="/path-to-your-logo.png" alt="Hospital Logo" className="sidebar-logo mb-3" />
                        </div>
                        <div className="sidebar-menu">
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/dashboard" className="d-flex align-items-center py-2 px-3">
                                        <i className="bi bi-columns-gap me-2"></i> Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/profile" className="d-flex align-items-center py-2 px-3">
                                        <i className="bi bi-person-circle me-2"></i> Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/change-password" className="d-flex align-items-center py-2 px-3">
                                        <i className="bi bi-key-fill me-2"></i> Change Password
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/terms" className="d-flex align-items-center py-2 px-3">
                                        <i className="bi bi-file-earmark-text me-2"></i> Terms & Conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/privacy" className="d-flex align-items-center py-2 px-3">
                                        <i className="bi bi-lock-fill me-2"></i> Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Logout button at the bottom of the sidebar */}
                        <div className="sidebar-logout mt-auto p-3">
                            <button onClick={handleLogout} className="btn btn-danger d-flex align-items-center">
                                <i className="bi bi-box-arrow-right me-2"></i> Logout
                            </button>
                        </div>
                    </div>

                    {/* Main content */}
                    <div className="main-content w-100">
                        {/* Header */}
                        <header className="header bg-primary py-2 px-4 d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <Link to="/" className="text-decoration-none text-white fs-3 fw-bold">Profile Setting</Link>
                            </div>

                            <div className="d-flex align-items-center">
                                <div className="user-info d-flex align-items-center">
                                    {/* Search with Icon */}
                                    <div className="input-group me-3">
                                        <span className="input-group-text" id="basic-addon1">
                                            <i className="bi bi-search"></i>
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Quick Search"
                                            aria-label="Quick Search"
                                            aria-describedby="basic-addon1"
                                        />
                                    </div>
                                    {/* Bell Icon */}
                                    <i className="bi bi-bell me-3 text-white fs-4"></i>
                                    {/* User Avatar and Name */}
                                    <img
                                        src="https://via.placeholder.com/40"
                                        alt="User Avatar"
                                        className="rounded-circle me-2"
                                    />
                                    <span className="text-white">{userFirstName}</span>
                                </div>
                            </div>
                        </header>

                        {/* Additional content goes here */}
                        <div className="content p-4">
                            {/* Profile setting or other sections */}
                        </div>
                    </div>
                </div>
            )}

            {/* {!isLoggedIn && (
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <h1>Please log in to access the dashboard</h1>
                    <Link to="/signin" className="btn btn-primary ms-4">Login</Link>
                </div>
            )} */}
        </>
    );
}

export default HeaderWithSidebar;
