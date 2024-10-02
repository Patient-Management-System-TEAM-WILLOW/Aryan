

import {BrowserRouter,Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './front-end/Component/SignUp';
import Header from './front-end/Component/Header'
import SignIn from './front-end/Component/SignIn';







function App() {
  return (
    <div className="App">
           <BrowserRouter>
         <Header/>
          <Routes>
                 
                  
                  {/* <Route path="/home/:userId" element={<Home />} /> */}
                  <Route path="/" element={<SignUp/>} />
                  <Route path="/signin" element={<SignIn/>} />
                 
                
                  
                 
                  
                  
          </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
