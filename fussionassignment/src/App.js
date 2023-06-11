import Navbar from "./components/Navbar/navbar"
import Menubox from "./components/menubox/menu"
import Contactdetails from "./components/contactdetails/contactdetails"

import './App.css'

const  App = () => {
  return (
    <div className="App">
    
        <Navbar />
      
      <div className="second-container">
          <Menubox/>
          <Contactdetails/>
      </div>
      
    </div>
  );
}

export default App;
