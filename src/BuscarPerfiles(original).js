import { useState } from "react";
import Search from './components/Search';

const BuscarPerfiles = () => {
    const [searchText, setSearchText] = useState('');

    const [perfiles, setPerfiles] = useState([
        { img: "https://picsum.photos/id/20/600/300", nombre: 'Marlon Villaseñor', tablero: 'Guía de dibujo e inspiración', id: 1},
        { img: "https://picsum.photos/id/42/600/300", nombre: 'Mayela Herrera', tablero: 'Fotos de gatitos', id: 2},
        { img: "https://picsum.photos/id/66/600/300", nombre: 'Meirem', tablero: 'Diario <3', id: 3}
    ]);



    return(
        <div className="buscar">
            <Search handleSearchNote={setSearchText} />
            {perfiles.map((perfil) => (
                <div className="perfil-preview" key={perfil.id}>
                    <div style={{ float:"left", display:"inline", paddingRight: 15}}>
                    <img src={perfil.img}></img>
                    </div>
                    <div style={{ float:"left", display:"inline" }}>
                    <h2>{perfil.nombre}</h2>
                    <p>{perfil.tablero}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BuscarPerfiles;