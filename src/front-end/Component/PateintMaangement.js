import React, { useState } from "react";
import { FaEye } from "react-icons/fa"; // Icon for the 'view' action
import { FaSearch } from "react-icons/fa"; // Icon for the search
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap for styles
import '../Component/Pateintmanagement.css'; // Importing CSS file for custom styles

function PatientManagement() {
  // Sample patient data
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "Marcus Philips",
      age: 60,
      issue: "Stomach Ache",
      doctor: "Dr. Mathew Best",
      disease: "Viral Infection",
      appointmentTime: "4:30 PM",
      appointmentType: "Online",
      phoneNumber: "123-456-7890",
      address: "123 Main Street, City",
      gender: "Male",
      image: "/images/patient1.jpg",
    },
    {
        id: 2,
        name: "Robert Star",
        age: 45,
        issue: "Head Ache",
        doctor: "Dr. Mathew Best",
        disease: "Migrane",
        appointmentTime: "3:30 PM",
        appointmentType: "Online",
        phoneNumber: "133-4646-2390",
        address: "121  Street, City",
        gender: "Male",
        image: "/images/patient1.jpg",
      },
      {
        id: 3,
        name: "Marcus Philips",
        age: 55,
        issue: "Heart",
        doctor: "Dr. Mathew Best",
        disease: "Heart Pateint",
        appointmentTime: "7:30 PM",
        appointmentType: "Onsite",
        phoneNumber: "333-356-750",
        address: "3 Ambik Heights, City",
        gender: "Male",
        image: "/images/patient1.jpg",
      },
      {
        id: 4,
        name: "Alex Philips",
        age: 13,
        issue: "Fever",
        doctor: "Dr. Mathew Best",
        disease: "Viral Infection",
        appointmentTime: "2:30 PM",
        appointmentType: "Online",
        phoneNumber: "323-356-7430",
        address: "143 Dam Street, City",
        gender: "Male",
        image: "/images/patient1.jpg",
      },
      {
        id: 5,
        name: "Sofia Downy",
        age: 22,
        issue: "Itching",
        doctor: "Dr. Mathew Best",
        disease: "Skin Infection",
        appointmentTime: "6:00 PM",
        appointmentType: "Onsite",
        phoneNumber: "223-556-7890",
        address: "123 Main Street, City",
        gender: "Female",
        image: "/images/patient1.jpg",
      },
      {
        id: 6,
        name: "Marcus Philips",
        age: 35,
        issue: "Stomach Ache",
        doctor: "Dr. Mathew Best",
        disease: "Viral Infection",
        appointmentTime: "4:30 PM",
        appointmentType: "Online",
        phoneNumber: "123-456-7890",
        address: "123 Main Street, City",
        gender: "Male",
        image: "/images/patient1.jpg",
      },
      {
        id: 7,
        name: "Marcus Philips",
        age: 35,
        issue: "Stomach Ache",
        doctor: "Dr. Mathew Best",
        disease: "Viral Infection",
        appointmentTime: "4:30 PM",
        appointmentType: "Online",
        phoneNumber: "123-456-7890",
        address: "123 Main Street, City",
        gender: "Male",
        image: "/images/patient1.jpg",
      },
      {
        id: 8,
        name: "Marcus Philips",
        age: 35,
        issue: "Stomach Ache",
        doctor: "Dr. Mathew Best",
        disease: "Viral Infection",
        appointmentTime: "4:30 PM",
        appointmentType: "Online",
        phoneNumber: "123-456-7890",
        address: "123 Main Street, City",
        gender: "Male",
        image: "/images/patient1.jpg",
      },
      {
        id: 9,
        name: "Marcus Philips",
        age: 35,
        issue: "Stomach Ache",
        doctor: "Dr. Mathew Best",
        disease: "Viral Infection",
        appointmentTime: "4:30 PM",
        appointmentType: "Online",
        phoneNumber: "123-456-7890",
        address: "123 Main Street, City",
        gender: "Male",
        image: "/images/patient1.jpg",
      },
   
  ]);

  const [selectedPatient, setSelectedPatient] = useState(null);

  // Handle view patient details
  const handleViewPatient = (patient) => {
    setSelectedPatient(patient);
  };

  // Handle close modal
  const handleCloseModal = () => {
    setSelectedPatient(null);
  };

  return (
    <div className=" width">
      <div className="appointment-nav">
        <a href="#" className="nav-link active">Today Appointment</a>
        <a href="#" className="nav-link">Upcoming Appointment</a>
        <a href="#" className="nav-link">Previous Appointment</a>
        <a href="#" className="nav-link">Cancel Appointment</a>
      </div>
      
      <h2 className="section-title">Today Appointment</h2>

      <div className="search-container">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search Patient"
            className="form-control search-input"
          />
        </div>
      </div>

      <table className="table table-hover table-striped table-bordered">
        <thead className="table-header">
          <tr>
            <th>Patient Name</th>
            <th>Patient Issue</th>
            <th>Doctor Name</th>
            <th>Diseas Name</th>
            <th>Appointment Time</th>
            <th>Appointment Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index}>
              <td>
                <img
                  src={patient.image || "/default-patient-image.jpg"}
                  alt="Patient"
                  className="patient-img"
                />
                {patient.name}
              </td>
              <td>{patient.issue}</td>
              <td>{patient.doctor}</td>
              <td>{patient.disease}</td>
              <td className="time">{patient.appointmentTime}</td>
              <td className={`type ${patient.appointmentType.toLowerCase()}`}>
                {patient.appointmentType}
              </td>
              <td>
                <FaEye
                  className="view-icon"
                  onClick={() => handleViewPatient(patient)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for viewing patient details */}
      {selectedPatient && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Patient Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={selectedPatient.image || "/default-patient-image.jpg"}
                  alt="Patient"
                  className="img-fluid rounded mb-3"
                />
                <p><strong>Name:</strong> {selectedPatient.name}</p>
                <p><strong>Age:</strong> {selectedPatient.age}</p>
                <p><strong>Issue:</strong> {selectedPatient.issue}</p>
                <p><strong>Doctor:</strong> {selectedPatient.doctor}</p>
                <p><strong>Appointment Time:</strong> {selectedPatient.appointmentTime}</p>
                <p><strong>Appointment Type:</strong> {selectedPatient.appointmentType}</p>
                <p><strong>Phone Number:</strong> {selectedPatient.phoneNumber}</p>
                <p><strong>Address:</strong> {selectedPatient.address}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PatientManagement;
