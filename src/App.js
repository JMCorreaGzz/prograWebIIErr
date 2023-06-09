import Tablero from './Tablero';
import Navbar from './Navbar';
import MiPerfil from './MiPerfil';
import EditarMiPerfil from './EditarMiPerfil';
import BuscarPerfiles from './BuscarPerfiles';
import OtrosTablero from './OtrosTablero';


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
                <Route path='/editarPerfil' element={<EditarMiPerfil/>}></Route>
                <Route path='/otrosTablero' element={<OtrosTablero/>}></Route>
            </Routes>
          </div>
        </div>
        </Router>
      );
};

export default App;