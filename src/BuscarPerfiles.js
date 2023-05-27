import { useState } from "react";

const BuscarPerfiles = () => {
    const [perfiles, setPerfiles] = useState([
        { img: "https://picsum.photos/id/20/600/300", nombre: 'Marlon Villaseñor', tablero: 'Guía de dibujo e inspiración', id: 1},
        { img: "https://picsum.photos/id/42/600/300", nombre: 'Mayela Herrera', tablero: 'Fotos de gatitos', id: 2},
        { img: "https://picsum.photos/id/66/600/300", nombre: 'Meirem', tablero: 'Diario <3', id: 3}
    ]);

    return(
        <div className="buscar">
            {perfiles.map((perfil) => (
                <div className="perfil-preview" key={perfil.id}>
                    <img src={perfil.img}></img>
                    <h2>{perfil.nombre}</h2>
                    <p>{perfil.tablero}</p>
                </div>
            ))}
        </div>
    );
}

export default BuscarPerfiles;