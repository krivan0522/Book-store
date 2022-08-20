import './App.css';
import Navbar from './Navbar';
import {HashRouter as Router, Route, Routes} from 'react-router-dom'; 
import Adventure from './Pages/Adventure';
import Educational from './Pages/Educational';
import SciFi from './Pages/SciFi';
import Novels from './Pages/Novels';
import Fiction from './Pages/Fiction';
import Romance from './Pages/Romance';
import { UserContext } from './UserContext';
import { useState } from 'react';
import Cart from './Cart';
import Home from './Home';

function App() {
  // const [value, setValue] = useState({"noqty":0, "books":[], "price":0})
  const [value, setValue] = useState({"noqty":0, "fp":0, "booktem":[]}) ;


  return (
    <Router>
      <UserContext.Provider value={{value, setValue}}>
      <div className="App">
        <div className="heading">
          <div className="navBar">
            <Navbar />
          </div>
        </div>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path="/romance" element={<Romance />} />
            <Route path="/adventure" element={<Adventure />} />
            <Route path="/educational" element={<Educational />} />
            <Route path="/scifi" element={<SciFi />} />
            <Route path="/novels" element={<Novels />} />
            <Route path="/fiction" element={<Fiction />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
      </div>
      <div>
        
      </div>
      
      </UserContext.Provider>
    </Router>
  );
}

export default App;