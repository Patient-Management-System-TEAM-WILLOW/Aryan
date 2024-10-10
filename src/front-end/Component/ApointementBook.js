import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Component/Apointement.css";
import {
    FaBell, FaEye,
    FaEdit,
    FaFileMedical,
    FaFilePrescription, FaCalendarAlt,
    FaHeartbeat,FaHospital,FaFileAlt,FaVirus,
  } from "react-icons/fa";
  import { Link } from "react-router-dom"

const AppointmentCard = ({ doctor, onCancel, onReschedule }) => {
  return (
    <div className="appointment-card"style={{marginTop:'180px'}}>
      <span className="s">{doctor.name}</span><span style={{marginLeft:'80px',color:"#00a6ff"}}>{doctor.icon}</span>
      <p>Appointment Type: <span>{doctor.type}</span></p>
      <p>Hospital Name: <span>{doctor.hospital}</span></p>
      <p>Appointment Time: <span>{doctor.time}</span></p>
      <p>Patient Issue: <span>{doctor.issue}</span></p>
      <div className="buttons">
        <button className="cancel-btn" onClick={() => onCancel(doctor.id)}><FaCalendarAlt/> Cancel</button>
        <button className="reschedule-btn" onClick={() => onReschedule(doctor.id)}><FaCalendarAlt/> Reschedule</button>
      </div>
    </div>
  );
};

function AppointmentBook() {
  const [appointments, setAppointments] = useState([
    { id: 1, name: "Dr. Nolan George", type: "Online", hospital: "Shambua Hospital", time: "10:20 AM", issue: "Feeling Tired",icon:<FaEye/> },
    { id: 2, name: "Dr. Cristofer", type: "Online", hospital: "Shambua Hospital", time: "10:20 AM", issue: "Feeling Tired",icon:<FaEye/>  },
    { id: 3, name: "Dr. Davis Donin", type: "Online", hospital: "Shambua Hospital", time: "10:20 AM", issue: "Feeling Tired",icon:<FaEye/>  },
    { id: 4, name: "Dr. Terry Calzoni", type: "Online", hospital: "Shambua Hospital", time: "10:20 AM", issue: "Feeling Tired",icon:<FaEye/>  },
  ]);

  const [startDate, setStartDate] = useState(new Date("2022/01/02"));
  const [endDate, setEndDate] = useState(new Date("2022/01/13"));

  const handleCancel = (id) => {
    setAppointments(appointments.filter(appointment => appointment.id !== id));
  };

  const handleReschedule = (id) => {
    alert(`Reschedule appointment ID: ${id}`);
  };

  return (
    <div className="appointments-container">
        <div className="sidebar bg-light p-4" >
        <div className="mb-4 "><img
              src="https://www.shutterstock.com/image-vector/medical-logo-healthcare-pharmacy-design-260nw-2281411385.jpg"
              alt="User"
              className=" ms-3"
              style={{ width: "100px",height:'80px' }}
            /></div>
        <ul className="list-unstyled text-center">
          <li className="mb-3">
            <FaFileMedical /> Personal Health Record
          </li>
          <li className="mb-3">
            <Link to="apbooke"><FaFilePrescription /> Appointment Booking</Link>
            
          </li>
          <li className="mb-3"> 
 <Link to="precriptionas"> Prescription Access </Link>      
          </li>
          <li className="mb-3"><i class="bi bi-file-medical"style={{marginRight:'10px'}}></i>Teleconsultation Access
          </li>
          <li className="mb-3" style={{marginRight:'100px'}}><i class="bi bi-chat-left-dots" style={{marginRight:'15px'}}></i>Chat
          </li>
          <li className="mb-3" style={{marginRight:'110px'}}> <i class="bi bi-receipt" style={{marginRight:'15px'}}></i>Bill
          </li>
        </ul>
        <button className="btn btn-primary w-100">Book Appointment</button>
      </div>
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
      <div className="header" >
        <h2 style={{marginTop:'200px',marginLeft:'140px'}}>My Appointment</h2>
        <div className="date-picker">
           
          
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="d MMM, yyyy"
            />
           
          <span> - </span>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            dateFormat="d MMM, yyyy"
          />
          <button id="bookAppointment">  <FaCalendarAlt/> Book Appointment</button>
        </div>
      </div>

      <div className="appointment-cards">
        {appointments.map(doctor => (
          <AppointmentCard
            key={doctor.id}
            doctor={doctor}
            onCancel={handleCancel}
            onReschedule={handleReschedule}
          />
        ))}
      </div>
    </div>
  );
}

export default AppointmentBook;
