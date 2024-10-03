# Event-app
 
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Component/Dashboard.css"; // Custom styles

function Dashboard() {
  const [userData, setUserData] = useState({
    firstName: "Lincoln",
    lastName: "Philips",
    email: "lincoln@gmail.com",
    phone: "99130 53222",
    hospitalName: "Silver Park Medical Center",
    gender: "Male",
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India"
  });
  
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleEdit = () => setIsEditing(!isEditing);
  const handleSave = () => {
    setIsEditing(false);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  return (
    <div className="dashboard-wrapper d-flex justify-content-center align-items-center">
      <div className="dashboard-section">
        <div className="d-flex">
          {/* Sidebar */}
          <div className="sidebars p-4 bg-light">
            <div className="text-center mb-4">
              <img 
                src="https://via.placeholder.com/100" 
                alt="User" 
                className="rounded-circle user-img mb-3"
              />
              <h5>{userData.firstName} {userData.lastName}</h5>
            </div>
              <h4>Menu</h4>
            <div className="menu">
              <ul className="list-unstyled">
                <li className="mb-3">
                  <i className="bi bi-person-circle me-2"></i>
                  <a href="/profile" className="text-decoration-none">Profile</a>
                </li>
                <li className="mb-3">
                  <i className="bi bi-key-fill me-2"></i>
                  <a href="/change-password" className="text-decoration-none">Change Password</a>
                </li>
                <li className="mb-3">
                  <i className="bi bi-file-earmark-text me-2"></i>
                  <a href="/terms" className="text-decoration-none">Terms & Condition</a>
                </li>
                <li>
                  <i className="bi bi-lock-fill me-2"></i>
                  <a href="/privacy" className="text-decoration-none">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Profile Form */}
          <div className="content-container ms-4 p-4">
            <h2 className="text-primary mb-4">Profile Setting</h2>
            <div className="profile-info card p-4">
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">First Name</label>
                  <input 
                    type="text" 
                    name="firstName" 
                    value={userData.firstName} 
                    onChange={handleInputChange} 
                    className="form-control" 
                    disabled={!isEditing} 
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName" 
                    value={userData.lastName} 
                    onChange={handleInputChange} 
                    className="form-control" 
                    disabled={!isEditing} 
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={userData.email} 
                    onChange={handleInputChange} 
                    className="form-control" 
                    disabled={!isEditing} 
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Phone Number</label>
                  <input 
                    type="text" 
                    name="phone" 
                    value={userData.phone} 
                    onChange={handleInputChange} 
                    className="form-control" 
                    disabled={!isEditing} 
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Hospital Name</label>
                  <input 
                    type="text" 
                    name="hospitalName" 
                    value={userData.hospitalName} 
                    onChange={handleInputChange} 
                    className="form-control" 
                    disabled={!isEditing} 
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Gender</label>
                  <input 
                    type="text" 
                    name="gender" 
                    value={userData.gender} 
                    onChange={handleInputChange} 
                    className="form-control" 
                    disabled={!isEditing} 
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">City</label>
                  <input 
                    type="text" 
                    name="city" 
                    value={userData.city} 
                    onChange={handleInputChange} 
                    className="form-control" 
                    disabled={!isEditing} 
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">State</label>
                  <input 
                    type="text" 
                    name="state" 
                    value={userData.state} 
                    onChange={handleInputChange} 
                    className="form-control" 
                    disabled={!isEditing} 
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Country</label>
                  <input 
                    type="text" 
                    name="country" 
                    value={userData.country} 
                    onChange={handleInputChange} 
                    className="form-control" 
                    disabled={!isEditing} 
                  />
                </div>
              </div>

              <div className="text-end">
                {isEditing ? (
                  <button className="btn btn-success me-3" onClick={handleSave}>
                    Save
                  </button>
                ) : (
                  <button className="btn btn-primary" onClick={handleEdit}>
                    Edit Profile
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

