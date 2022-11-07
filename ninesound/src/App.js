import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Prices from './pages/Prices';
import Contacts from './pages/Contacts';

function App() {
  return (
    <div className="App">
     <div className="ninesound"> N I N E S O U N D </div>


     <Link to="/">
    <button>HOME</button>
    </Link>
    <Link to="/services">
    <button>SERVICES</button>
    </Link>
    <Link to="/prices">
    <button>PRICES</button>
    </Link>
    <Link to="/contacts">
    <button>CONTACTS</button>
    </Link>
   

    <Routes>
    <Route path="" element={<Home/>} />
    <Route path="services" element={ <Services/>} />
    <Route path="prices" element={ <Prices/>} />
    <Route path="contacts" element={ <Contacts/>} />
    </Routes>
    </div>
  );
}

export default App;
