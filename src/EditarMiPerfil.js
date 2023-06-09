import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const EditarMiPerfil = () => {
    const [file, setFile] = useState();
    const navigate = useNavigate();
    const handleCancelar = () => navigate("/perfil");
    const handleGuardar = () => navigate("/perfil");

    return(
        <div style={{ paddingLeft: 175 }} className="container mt-5 justify-content-center">
            <div className="card p-3">
                <div className="d-flex align-items-center">
                    <div className="image">
                    <input type="file" id="imgFilePerfil" accept=".jpg, .jpeg, .png" style={{width: 160}} 
                    onChange={(event) => {
                        console.log(event.target.files);
                        setFile(URL.createObjectURL(event.target.files[0]));
                    }}
                    onClick={(e) => {
                        e.target.value = null
                    }} />
                    <img src={file} alt=" " className="rounded" width="155"/>
                </div>
                <div className="ml-3 w-100"> 
                   <input type="text" className="mb-0 mt-0" placeholder="Username"></input>
                   <div><input type="text" className="mb-0 mt-0" placeholder="Nombre Completo"></input></div>
                   <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">

                    <div className="d-flex flex-column">
                        <input type="text" className="descripcion" placeholder="Descripción" style={{ width: 370, height:150 }}></input>
                    </div>
                 
                  {/*   <div className="d-flex flex-column">
                        <span className="followers">Followers</span>
                        <span className="number2">980</span>      
                    </div>

                    <div className="d-flex flex-column">
                        <span className="rating">Rating</span>
                        <span className="number3">8.9</span> 
                    </div>   */}

                   </div>

                   <div>
                    {/*<button className="btn btn-sm btn-outline-primary w-100">Chat</button>*/}
                    {/* <button className="btn btn-sm btn-primary w-100 ml-2">Editar</button> */}  
                    <button style={{ width: 100, marginTop:7 }} className="btn btn-sm btn-primary " onClick={handleGuardar}>Guardar</button>
                    <button style={{ width: 100, float:"right", marginTop:7 }} className="btn btn-sm btn-primary " onClick={handleCancelar}>Cancelar</button>
                   </div>
                </div>           
                </div>
            </div>
         </div>
    );
}

export default EditarMiPerfil;