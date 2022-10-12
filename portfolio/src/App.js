
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Work from './pages/work';
import { useTranslation } from 'react-i18next';
// cmnd+shift+ <---avada menüü
//Open User Setting (JSON)   
function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
       
    <div className="navigation-pictures">
    <div> {t('Welcome to React')} </div>

      <Link to="work">
      <img src="https://www.cyberpunk.net/build/images/home3/screen-image-city-209a8285.jpg" alt="" />
      </Link>
      <Link to="hobbies">
      <img src="https://mkuubis.ee/wp-content/uploads/2020/06/screen-beautiful-and-deadly-en.jpg" alt=""/>
      </Link>
      <Link to="courses">
      <img src="https://m.media-amazon.com/images/I/415x7USMpVL._AC_SY350_.jpg" alt=""/>
      </Link>
          </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/IJoR1oZwWRA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <img className="main-picture" src="https://w0.peakpx.com/wallpaper/16/470/HD-wallpaper-cyber-world-troop-girl-cyberpunk-scifi-artist-artwork-digital-art-artstation.jpg" alt="cyber punk" />
         
          <div><a className='facebook-button' href="http://facebook.com/">
            <img src="/facebook.png"alt="" />
            <span>Facebook</span>
</a>

          </div>
          
          
    <Routes>
      <Route path="work" element={<Work/>} />
      <Route path="hobbies" element={<hobid/>} />
      <Route path="courses" element={<kursused/>} />
      
    </Routes>
    </div>
  );
}

export default App;
