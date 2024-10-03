

import {BrowserRouter,Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './front-end/Component/SignUp';
import Header from './front-end/Component/Header'
import SignIn from './front-end/Component/SignIn';
import Dashboard from './front-end/Component/Dashboard';
import DoctorManagement from './front-end/DoctorManagement';
import Pateintmanagement from './front-end/Component/PateintMaangement';







function App() {
  return (
    <div className="App">
           <BrowserRouter>
         <Header/>
          <Routes>
                
                  <Route path="/" element={<SignUp/>} />
                  <Route path="/signin" element={<SignIn/>} />
                  <Route path="/home/:userId" element={< Dashboard/>} />
                  <Route path="/doctormanagement" element={< DoctorManagement/>} />
                  <Route path="/patientmanagement" element={< Pateintmanagement/>} />
                 
                
                  
                 
                  
                  
          </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
