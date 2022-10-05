
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import './App.css';
import Uudised from './pages/Uudised';
import Kontaktid from './pages/Kontakt';
import Meist from './pages/Meist';
import LisaUudis from './pages/LisaUudis';
import HaldaUudiseid from './pages/HaldaUudiseid';
import YksUudis from './pages/YksUudis';
import MuudaUudis from './pages/MuudaUudis';

function App() {
  return (
    
    <div>
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/uudised">
        <button>Uudiste lehele</button>
      </Link>
      <Link to="/kontakt">
        <button>Võta meiega ühendust!</button>
      </Link>
      <Link to="/meist">
        <button>Info meist</button>
      </Link>
      <Link to="/lisa-uudis">
        <button>Lisa uudis</button>
      </Link>
      <Link to="/halda">
        <button>Halda uudiseid</button>
      </Link>

    <Routes>
<Route path='' element={ <Avaleht />} />
<Route path='uudised' element={ <Uudised />} />
<Route path='kontakt' element={ <Kontaktid />} />
<Route path='meist' element={ <Meist/>} />
<Route path='lisa-uudis' element={ <LisaUudis />} />
<Route path='halda' element={<HaldaUudiseid />} />
<Route path='uudis/:index' element={ <YksUudis />} />
<Route path='muuda/:index' element={ <MuudaUudis />} />
    </Routes>

  </div>
  );
}

export default App;
