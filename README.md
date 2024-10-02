# Event-app
 

             import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Reg() {
    let [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        state: '',
        city: '',
        hospital: '',
        username: '',
        password: '',
        cpass: ''
    });
    
    let [showPassword, setShowPassword] = useState(false);
    let [showConfirmPassword, setShowConfirmPassword] = useState(false);
    let [hospitals, setHospitals] = useState([]);
    let [showHospitalModal, setShowHospitalModal] = useState(false);
    let [newHospital, setNewHospital] = useState({
        hospitalName: '',
        hospitalAddress: '',
        country: '',
        state: '',
        city: '',
        zipcode: ''
    });

    // Fetch hospitals on page load
    useEffect(() => {
        Axios.get("http://localhost:3000/hospitals")
            .then((response) => {
                setHospitals(response.data);
            })
            .catch(() => {
                toast.error("Failed to load hospitals");
            });
    }, []);

    let getValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]: value });
    };

    let togglePassword = () => {
        setShowPassword(!showPassword);
    };

    let toggleConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    let validateUser = async () => {
        // Basic validation for required fields
        if (!user.firstName || !user.lastName || !user.email || !user.username || !user.password || !user.cpass) {
            toast.error('All fields are required');
            return false;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(user.email)) {
            toast.error('Invalid email format');
            return false;
        }

        try {
            const usernameRes = await Axios.get("http://localhost:3000/users/?username=" + user.username);
            if (usernameRes.data.length > 0) {
                toast.error('Username is already in use');
                return false;
            }

            const emailRes = await Axios.get("http://localhost:3000/users/?email=" + user.email);
            if (emailRes.data.length > 0) {
                toast.error('Email is already in use');
                return false;
            }

            if (user.password !== user.cpass) {
                toast.error('Password and Confirm Password do not match');
                return false;
            }

            return true;
        } catch (error) {
            toast.error('Something went wrong');
            return false;
        }
    };

    let data = async (e) => {
        e.preventDefault();
        const isValid = await validateUser();
        if (isValid) {
            Axios.post("http://localhost:3000/users", user)
                .then(() => {
                    toast.success('Registered Successfully');
                    window.location = "/signin";
                })
                .catch(() => {
                    toast.error('Something Went Wrong');
                });
        }
    };

    let handleNewHospitalChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setNewHospital({ ...newHospital, [name]: value });
    };

    let saveHospital = () => {
        if (!newHospital.hospitalName || !newHospital.hospitalAddress || !newHospital.country || !newHospital.state || !newHospital.city || !newHospital.zipcode) {
            toast.error("All fields are required for hospital creation");
            return;
        }
        
        Axios.post("http://localhost:3000/hospitals", newHospital)
            .then((response) => {
                setHospitals([...hospitals, response.data]);
                setShowHospitalModal(false);
                toast.success('Hospital created successfully');
            })
            .catch(() => {
                toast.error('Failed to add hospital');
            });
    };

    return (
        <div style={styles.container}>
            <ToastContainer />
            <form method="post" onSubmit={data} style={styles.form}>
                <h1 style={styles.heading}>Registration</h1>
                {/* Form Fields */}
                <div style={styles.row}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Enter First Name"
                        onChange={getValue}
                        style={styles.input}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Enter Last Name"
                        onChange={getValue}
                        style={styles.input}
                    />
                </div>
                <div style={styles.row}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email Address"
                        onChange={getValue}
                        style={styles.input}
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Enter Phone Number"
                        onChange={getValue}
                        style={styles.input}
                    />
                </div>
                 <div style={styles.row}>
                    <select name="country" onChange={getValue} style={styles.select}>
                        <option>Select Country</option>
                        <option>India</option>
                    </select>
                    <select name="state" onChange={getValue} style={styles.select}>
                        <option>Select State</option>
                        <option>Gujarat</option>
                    </select>
                    <select name="city" onChange={getValue} style={styles.select}>
                        <option>Select City</option>
                        <option>Surat</option>
                        <option>Ahmedabad</option>
                        <option>Rajkot</option>
                    </select>
                </div>
                {/* Other form fields omitted for brevity */}

                <div style={styles.row}>
                    <select
                        name="hospital"
                        onChange={getValue}
                        style={styles.select}
                    >
                        <option>Select Hospital</option>
                        {hospitals.map((hospital, index) => (
                            <option key={index} value={hospital.hospitalName}>{hospital.hospitalName}</option>
                        ))}
                    </select>
                </div>
                <button
                    type="button"
                    onClick={() => setShowHospitalModal(true)}
                    style={styles.createHospitalButton}
                >
                    Create Hospital
                </button>
                <div style={styles.row}>
                    <div style={styles.passwordContainer}>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter Password"
                            onChange={getValue}
                            style={styles.input}
                        />
                        <span onClick={togglePassword} style={styles.icon}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <div style={styles.passwordContainer}>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="cpass"
                            placeholder="Confirm Password"
                            onChange={getValue}
                            style={styles.input}
                        />
                        <span onClick={toggleConfirmPassword} style={styles.icon}>
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                </div>
                
                {/* Password fields omitted for brevity */}
                
                <input
                    type="submit"
                    value="Register"
                    style={styles.submitButton}
                />
                <Link to='/signin' style={styles.link}>Already have an account? Login</Link>
            </form>
            
            {/* Hospital Modal */}
            {showHospitalModal && (
                <div style={styles.modalBackdrop}>
                    <div style={styles.modalContent}>
                        <h2 style={styles.modalHeading}>Create Hospital</h2>
                        <input
                            type="text"
                            name="hospitalName"
                            placeholder="Hospital Name"
                            onChange={handleNewHospitalChange}
                            style={styles.input}
                        />
                        <input
                            type="text"
                            name="hospitalAddress"
                            placeholder="Hospital Address"
                            onChange={handleNewHospitalChange}
                            style={styles.input}
                        />
                        <div style={styles.row}>
                            <select name="country" onChange={handleNewHospitalChange} style={styles.select}>
                                <option>Select Country</option>
                                <option>India</option>
                            </select>
                            <select name="state" onChange={handleNewHospitalChange} style={styles.select}>
                                <option>Select State</option>
                                <option>Gujarat</option>
                            </select>
                            <select name="city" onChange={handleNewHospitalChange} style={styles.select}>
                                <option>Select City</option>
                                <option>Surat</option>
                                <option>Ahmedabad</option>
                                <option>Rajkot</option>
                            </select>

                            <input
                                type="text"
                                name="zipcode"
                                placeholder="Zipcode"
                                onChange={handleNewHospitalChange}
                                style={styles.input}
                            />
                        </div>
                        <div style={styles.modalFooter}>
                            <button onClick={saveHospital} style={styles.saveButton}>Save</button>
                            <button onClick={() => setShowHospitalModal(false)} style={styles.cancelButton}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// Styles remain unchanged
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f2f5',
        fontFamily: 'Arial, sans-serif',
    },
    heading: {
        fontSize: '2.5rem',
        marginBottom: '20px',
        color: '#333',
    },
    form: {
        backgroundColor: '#ffffff',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '500px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '10px',
    },
    input: {
        height: '40px',
        width: '100%',
        borderRadius: '8px',
        border: '1px solid #ddd',
        paddingLeft: '15px',
        fontSize: '16px',
        boxSizing: 'border-box',
    },
    select: {
        height: '40px',
        width: '100%',
        borderRadius: '8px',
        border: '1px solid #ddd',
        paddingLeft: '15px',
        fontSize: '16px',
        boxSizing: 'border-box',
    },
    passwordContainer: {
        position: 'relative',
        width: '100%',
    },
    icon: {
        position: 'absolute',
        top: '50%',
        right: '10px',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
    },
    submitButton: {
        backgroundColor: '#1a73e8',
        color: '#ffffff',
        border: 'none',
        padding: '12px 0',
        borderRadius: '8px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    link: {
        marginTop: '10px',
        fontSize: '1rem',
        color: '#1a73e8',
        textDecoration: 'none',
        textAlign: 'center',
    },
    createHospitalButton: {
        marginTop: '10px',
        backgroundColor: '#28a745',
        color: '#fff',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '14px',
    },
    modalBackdrop: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        width: '90%',
        maxWidth: '500px',
    },
    modalHeading: {
        fontSize: '1.5rem',
        marginBottom: '20px',
        color: '#333',
    },
    modalFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
    },
    saveButton: {
        backgroundColor: '#28a745',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
    },
    cancelButton: {
        backgroundColor: '#dc3545',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
    }
};

export default Reg;
