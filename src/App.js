import Tablero from './Tablero';
import Navbar from './Navbar';
import MiPerfil from './MiPerfil';
import BuscarPerfiles from './BuscarPerfiles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {

    return (
        <Router>
        <div className="App">
          <Navbar />
          <div className='content'>
            <Routes>
                <Route path='/tablero' element={<Tablero />}></Route>
                <Route path='/perfil' element={<MiPerfil/>}></Route>
                <Route path='/buscar' element={<BuscarPerfiles/>}></Route>
            </Routes>
          </div>
        </div>
        </Router>
      );
};

export default App;