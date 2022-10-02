
import { Link, Route, Routes } from 'react-router-dom';

import './App.css'; 
import Avaleht from './pages/Avaleht';
import ValitudTegelased from './pages/ValitudTegelased';
import LisaTegelane from './pages/LisaTegelane';
import Statistika from './pages/Statistika';

function App() {
  return (
    <div className="App">

<Link to="/">
<button>Avaleht</button>
</Link>
<Link to="/lisategelane">
<button>LisaTegelane</button>
</Link>
<Link to="/valitudtegelased">
<button>ValitudTegelased</button>
</Link>
<Link to="/statistika">
  <button>Statistika</button>
</Link>


    
<Routes>
<Route path="" element={ <Avaleht/>} />
 <Route path="lisategelane" element={ <LisaTegelane/>} />
 <Route path="valitudtegelased" element={ <ValitudTegelased/>} />
 <Route path="statistika" element={<Statistika/>} />
      </Routes>
    </div>
  );
}

export default App;
