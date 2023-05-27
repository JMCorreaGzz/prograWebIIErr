import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar">
            <h1>Note-It</h1>
            <div className="links">
                <Link to="/buscar">Buscar perfiles</Link>
                <Link to="/tablero">Mi Tablero</Link>
                <Link to="/perfil">Mi Perfil</Link>
            </div>
        </nav>
    );
}

export default Navbar;