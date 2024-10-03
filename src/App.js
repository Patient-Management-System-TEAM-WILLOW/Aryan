

import {BrowserRouter,Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './front-end/Component/SignUp';
import Header from './front-end/Component/Header'
import SignIn from './front-end/Component/SignIn';
import Dashboard from './front-end/Component/Dashboard';







function App() {
  return (
    <div className="App">
           <BrowserRouter>
         <Header/>
          <Routes>
                
                  <Route path="/" element={<SignUp/>} />
                  <Route path="/signin" element={<SignIn/>} />
                  <Route path="/home/:userId" element={< Dashboard/>} />
                 
                
                  
                 
                  
                  
          </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
