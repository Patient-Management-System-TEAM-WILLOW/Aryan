import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaBell, FaEye,
  FaEdit,
  FaFileMedical,
  FaFilePrescription,
  FaHeartbeat,FaHospital,FaFileAlt,FaVirus,
} from "react-icons/fa";
import { Modal, Button,Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const PatientDashboard = () => {
  const [userData, setUserData] = useState({
    name: "Marcus Philips",
    number: "99130 44537",
    email: "John@gmail.com",
    gender: "Male",
    dob: "2 Jan, 2022",
    age: "20 Years",
    bloodGroup: "B+",
    height: 160,
    weight: 50,
    country: "India",
    state: "Gujarat",
    city: "Ahmedabad",
    address: "B-408 Swastik society, mota varacha rajkot",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleViewClick = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="dashboard-wrapper d-flex justify-content-center">
     
     <div className="sidebar bg-light p-4" style={{ width: '220px', height: '100vh', position: 'fixed', top: 0, left: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div className="text-center mb-4">
            <img
              src="https://i.pinimg.com/564x/e3/59/47/e3594778bad088a0582c7638ffa4333c.jpg"
              alt="Logo"
              className="img-fluid"
              style={{ width: "100px", height: "80px", borderRadius: "8px" }}
            />
          </div>
          <ul className="list-unstyled text-center">
            <li className="mb-3">
              <FaFileMedical className="me-2" /> Personal Health Record
            </li>
            <li className="mb-3">
              <Link to="/home/:userId/apbooke" style={{ textDecoration: 'none' ,color:'black'}}>
                <FaFilePrescription className="me-2" />Appointment Booking
              </Link>
            </li>
            <li className="mb-3">
            <FaFilePrescription/> <Link to="/home/:userId/p" style={{ textDecoration: 'none' ,color:'black'}}>Prescription Access</Link>
            </li>
            <li className="mb-3">
              <Dropdown>
                <Dropdown.Toggle variant="light">
                  <FaFileMedical className="me-2" /> Bill and Payments
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item><Link style={{ textDecoration: 'none',color:"black" }} to="/home/:userId/bills">Monitor Bill</Link></Dropdown.Item>
                  <Dropdown.Item><Link style={{ textDecoration: 'none',color:"black" }} to="/home/:userId/ibills">Insurance Claims</Link></Dropdown.Item>
                  <Dropdown.Item><Link style={{ textDecoration: 'none',color:'black'}} to="/home/:userId/detailbills">Payment Process</Link></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="mb-3">
            <FaFileMedical className="me-2" /> <Link to="/home/:userId/reportan" style={{ textDecoration: 'none' ,color:'black'}}>Report Analytics</Link>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <button className="btn btn-primary w-100 mb-3">Book Appointment</button>
          <button className="btn btn-danger w-100" >Logout</button>
        </div>
      </div>
      <div className="content-container mx-auto p-4" style={{ maxWidth: "1200px" }}>
        {/* Patient Details Section */}
        <header className="header d-flex align-items-center justify-content-between px-4 py-2 bg-light mb-4">
          <div className="search-bar">
            <input type="text" className="form-control" placeholder="Search..." />
          </div>
          <div className="user-info d-flex align-items-center">
            <FaBell size={24} />
            <span className="me-3">Lincoln Philips</span>
            <img
              src="https://via.placeholder.com/50"
              alt="User"
              className="rounded-circle ms-3"
              style={{ width: "50px" }}
            />
          </div>
        </header>
        <div className="card p-4 mb-4 text-center position-relative" style={{ fontSize: "0.9rem",marginTop:'170px' }}>
          <h2 style={{ textAlign: 'left', color: 'black', fontSize: '28px' }}>Patient Details</h2>
          <button className="btn btn-light position-absolute top-0 end-0" onClick={handleEdit}>
            <FaEdit /> {isEditing ? "Save" : "Edit Profile"}
          </button>
          <div className="row">
            {/* Profile Image */}
            <div className="col-md-3 d-flex justify-content-center align-items-center mb-1">
              <img
                src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
                alt="Profile"
                className="rounded-circle"
                style={{ width: "150px", height: "150px" }}
              />
            </div>

            {/* Profile Information with Inputs */}
            <div className="col-md-8 mt-8">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-2" style={{ textAlign: "left", color: "gray", marginBottom: "5px" }}>
                    <strong>Name:</strong>{" "}
                    {isEditing ? (
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={userData.name}
                        onChange={handleInputChange}
                      />
                    ) : (
                      userData.name
                    )}
                  </div>
                  <div className="mb-2" style={{ textAlign: "left", color: "gray", marginBottom: "5px" }}>
                    <strong>Email:</strong>{" "}
                    {isEditing ? (
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                      />
                    ) : (
                      userData.email
                    )}
                  </div>
                  <div className="mb-2" style={{ textAlign: "left", color: "gray", marginBottom: "5px" }}>
                    <strong>Gender:</strong>{" "}
                    {isEditing ? (
                      <input
                        type="text"
                        className="form-control"
                        name="gender"
                        value={userData.gender}
                        onChange={handleInputChange}
                      />
                    ) : (
                      userData.gender
                    )}
                  </div>
                  <div className="mb-2" style={{ textAlign: "left", color: "gray", marginBottom: "5px" }}>
                    <strong>Height (cm):</strong>{" "}
                    {isEditing ? (
                      <input
                        type="text"
                        className="form-control"
                        name="height"
                        value={userData.height}
                        onChange={handleInputChange}
                      />
                    ) : (
                      userData.height
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-2" style={{ textAlign: "left", color: "gray", marginBottom: "5px" }}>
                    <strong>Number:</strong>{" "}
                    {isEditing ? (
                      <input
                        type="text"
                        className="form-control"
                        name="number"
                        value={userData.number}
                        onChange={handleInputChange}
                      />
                    ) : (
                      userData.number
                    )}
                  </div>
                  <div className="mb-2" style={{ textAlign: "left", color: "gray", marginBottom: "5px" }}>
                    <strong>Address:</strong>{" "}
                    {isEditing ? (
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={userData.address}
                        onChange={handleInputChange}
                      />
                    ) : (
                      userData.address
                    )}
                  </div>
                  <div className="mb-2" style={{ textAlign: "left", color: "gray", marginBottom: "5px" }}>
                    <strong>Weight (Kg):</strong>{" "}
                    {isEditing ? (
                      <input
                        type="text"
                        className="form-control"
                        name="weight"
                        value={userData.weight}
                        onChange={handleInputChange}
                      />
                    ) : (
                      userData.weight
                    )}
                  </div>
                  <div className="mb-2" style={{ textAlign: "left", color: "gray", marginBottom: "5px" }}>
                    <strong>Blood Group:</strong>{" "}
                    {isEditing ? (
                      <input
                        type="text"
                        className="form-control"
                        name="bloodGroup"
                        value={userData.bloodGroup}
                        onChange={handleInputChange}
                      />
                    ) : (
                      userData.bloodGroup
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Medical History Section */}
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card p-4">
              <h2 className="text-primary mb-4">Medical History</h2>
              <div className="row">
                <div className="col-md-4">
                  <h5>Dulce Schleifer</h5>
                  <p>2 Jan, 2022</p>
                  <p>The patient had viral infections, treated at Apollo Hospital.</p>
                </div>
                <div className="col-md-4">
                  <h5>Dulce Workman</h5>
                  <p>2 Jan, 2022</p>
                  <p>Allergies identified and treated by Dr. Ryan Carder.</p>
                </div>
                <div className="col-md-4">
                  <h5>Miracle Septimus</h5>
                  <p>2 Jan, 2022</p>
                  <p>Mild infections treated at Narayana Health.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Prescriptions Section */}
          <div className="col-md-6 mb-4">
            <div className="card p-4">
              <h2 className="text-primary mb-4">Prescriptions</h2>
              <div className="row mb-2">
                <div className="col-md-3"><strong>Hospital</strong></div>
                <div className="col-md-3"><strong>Date</strong></div>
                <div className="col-md-3"><strong>Disease</strong></div>
                <div className="col-md-3"><strong>Action</strong></div>
              </div>
              {[{ hospital: "Apollo", date: "2 Jan, 2022", disease: "Colds and Flu" },
                  { hospital: "Medanta", date: "2 Jan, 2022", disease: "Allergies" },
                  { hospital: "Fortis", date: "2 Jan, 2022", disease: "Infections" },].map((prescription, index) => (
                <div key={index} className="row mb-2">
                  <div className="col-md-3">{prescription.hospital}</div>
                  <div className="col-md-3">{prescription.date}</div>
                  <div className="col-md-3">{prescription.disease}</div>
                  <div className="col-md-3">
                    <FaEye onClick={() => handleViewClick(prescription.disease)} style={{ cursor: "pointer", color: 'rgb(13 110 253)', marginLeft: '15px' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Test Reports Section */}
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card p-4">
              <h2 className="text-primary mb-4">Test Reports</h2>
              {[{ doctor: "Dr. Marcus Philips", date: "2 Jan, 2022", disease: "Viral Infection" },{ doctor: "Dr. Marcus Philips", date: "2 Jan, 2022", disease: "Viral Infection" },{ doctor: "Dr. Marcus Philips", date: "2 Jan, 2022", disease: "Viral Infection" }].map((test, index) => (
                <div key={index} className="row mb-2">
                  <div className="col-md-6">{test.doctor}</div>
                  <div className="col-md-3">{test.date}</div>
                  <div className="col-md-3">{test.disease}</div>
                  <FaEye onClick={() => handleViewClick(test.disease)} style={{ cursor: "pointer", color: 'rgb(13 110 253)' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Patient Status Section */}
          <div className="col-md-6 mb-4">
            <div className="card p-4">
              <h2 className="text-primary mb-4">Patient Status</h2>
              <div className="row">
                {[{ hospital: "Shamuba Hospital", doctor: "Dr. Mathew Best", date: "2 Jan, 2022" },{ hospital: "Shamuba Hospital", doctor: "Dr. Mathew Best", date: "2 Jan, 2022" },{ hospital: "Shamuba Hospital", doctor: "Dr. Mathew Best", date: "2 Jan, 2022" },{ hospital: "Shamuba Hospital", doctor: "Dr. Mathew Best", date: "2 Jan, 2022" }].map((status, index) => (
                  <div key={index} className="col-md-6 mb-3">
                    <div className="status-item d-flex align-items-center">
                      <div className="icon me-2">
                        <FaBell />
                      </div>
                      <div className="info">
                        <strong>{status.hospital}</strong>
                        <p>{status.doctor}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>View Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>{modalContent}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default PatientDashboard;
