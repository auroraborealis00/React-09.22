
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import Lisatoode from './pages/Lisatoode';
import Meist from './pages/Meist';
import Ostukorv from './pages/Ostukorv';
import Seaded from './pages/Seaded';
import Poed from './pages/Poed';
import HaldaTooteid from './pages/HaldaTooteid';
import MuudaTooteid from './pages/MuudaTooteid';

function App() {
  return (
    <div className="App">
    <img className="pilt" alt="Nobe pilt auto" src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg"/>
    <button className="nupp">Nupp</button>
    
    
    <Link to="/">
    <button>Avalehele</button>
    </Link>
    <Link to="/lisa-toode">
    <button>Lisa toode</button>
    </Link>
    <Link to="/meist">
    <button>Meist</button>
    </Link>
    <Link to="/ostukorv">
    <button>Ostukorv</button>
    </Link>
    <Link to="/seaded">
    <button>Seaded</button>
    </Link>
    <Link to="/poed">
     <button>Poed</button>   
    </Link>
    <Link to="/halda">
     <button>Halda tooteid</button>   
    </Link>
    
    
    
    <Routes>
    <Route path="" element={ <Avaleht/>} />
    <Route path="lisa-toode" element={ <Lisatoode/>} />
    <Route path="meist" element={ <Meist/>} />
    <Route path="ostukorv" element={ <Ostukorv/>} />
    <Route path="seaded" element={ <Seaded/>} />
    <Route path="poed" element={ <Poed /> } />
    <Route path="halda" element={ <HaldaTooteid /> } />
    <Route path="muuda/:index" element={ <MuudaTooteid /> } />
    </Routes>
    
    </div>


  );
}

export default App;
