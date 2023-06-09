import { useNavigate } from "react-router-dom";

const Perfiles = ({ img, nombre, tablero, id}) => {

        const navigate = useNavigate();
        const handleOnClick = () => navigate("/otrosTablero");

	return (
            <div className="perfil-preview" key={id} onClick={handleOnClick}>
                    <div style={{ float:"left", display:"inline", paddingRight: 15}}>
                    <img src={img}></img>
                    </div>
                    <div style={{ float:"left", display:"inline" }}>
                    <h2>{nombre}</h2>
                    <p>{tablero}</p>
                    </div>
            </div>
	);
};

export default Perfiles;