import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Tagasiside from './pages/Tagasiside';
import TagasideAndjad from './pages/TagasisideAndjad';
import Kasutajad from './pages/Kasutajad';
import Tegevused from './pages/Tegevused';

function App() {
  return (
    <div>
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/tagasiside">
        <button>Tagasiside lehele</button>
      </Link>
      <Link to="/andjad">
        <button>Vaata, kes tagasisidet on andnud</button>
      </Link>
      <Link to="/kasutajad">
        <button>Vaata, kes on kasutajad</button>
      </Link>
      <Link to="/tegevused">
        <button>Vaata, mis ülesandeid veel tegema pead</button>
      </Link>
<Routes>
  <Route path="/" exact element={<div>Tere</div>} />
  <Route path="/tagasiside" exact element={ <Tagasiside />} />
  <Route path="/andjad" exact element={ <TagasideAndjad />} />
  <Route path="/kasutajad" exact element={ <Kasutajad />} />
  <Route path="/tegevused" exact element={ <Tegevused />} />
</Routes>
    </div>
  );
}

export default App;
