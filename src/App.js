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
import { QrReader } from "react-qr-reader";

function App() {
  // const [value, setValue] = useState({"noqty":0, "books":[], "price":0})
  const [value, setValue] = useState({"noqty":0, "fp":0, "booktem":[]}) ;
  const [selected, setSelected] = useState("environment");
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  const [data, setData] = useState("");

  const handleScan = async (scanData) => {
    setLoadingScan(true);
    console.log(`loaded data data`, scanData);
    if (scanData && scanData !== "") {
      console.log(`loaded >>>`, scanData);
      setData(scanData);
      setStartScan(false);
      setLoadingScan(false);
      // setPrecScan(scanData);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <Router>
      <UserContext.Provider value={{value, setValue}}>
      <div className="App">
        <div className="heading">
          <div className="navBar">
            <Navbar />
          </div>
          <button className="button-landingpage" onClick={() => { setStartScan(!startScan); }}>
          {startScan ? "Stop Scan" : "Start Scan"}
        </button>
        {startScan && (
          <>
            <select onChange={(e) => setSelected(e.target.value)}>
              <option value={"environment"}>Back Camera</option>
              <option value={"user"}>Front Camera</option>
            </select>
            <QrReader
              facingMode={selected}
              delay={1000}
              onError={handleError}
              onScan={handleScan}
              // chooseDeviceId={()=>selected}
              style={{ width: "300px" }}
            />
          </>
        )}
        {loadingScan && <p>Loading</p>}
        {data !== "" && <p>{data}</p>}
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