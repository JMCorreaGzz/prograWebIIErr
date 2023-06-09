import React, { useState } from 'react';
import axios from 'axios';


const Register = () => {
    const [nameU, setNameU] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createdDate, setCreated] = useState('');
    const [profilepic, setProfilePic] = useState('');
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = {
            nameU, 
            lastName,
            userName,
            email,
            password
        }
        try {
            const response = await axios.post("http://localhost:3000/src/api/endpoint", formData);
            console.log(response.data)
        }  catch (error){
          console.error(error);
        };
    
    };

    return(
        <>
        <div className="container-fluid">
            <div className="row mh-100vh">
                <div className="col-10 col-sm-8 col-md-6 col-lg-6 offset-1 offset-sm-2 offset-md-3 offset-lg-0 align-self-center d-lg-flex align-items-lg-center align-self-lg-stretch p-5 rounded rounded-lg-0 my-5 my-lg-0" id="login-block" style={{background: "url(assets/img/corkboard.jpg) center center / cover"}}>
                            <div className="text-center"></div>
                                <form className="user" onSubmit={handleSubmit}>

                                    <label className="form-label text-secondary" style={{color: "rgb(255,255,255)!important"}}>Nombre de Usuario</label>
                                        <div className="mb-3"><input value={userName} className="form-control form-control-user"  type="text" placeholder="Nombre de Usuario"onChange={(e) => setUserName(e.target.value)} name="UsernameRegister" required id="UsernameRegister"></input></div>
                                    <label className="form-label text-secondary" style={{color: "rgb(255,255,255)!important"}}>Correo</label>
                                        <div className="mb-3"><input value={email} className="form-control form-control-user"  type="text" id="EmailRegister" onChange={(e) => setEmail(e.target.value)} placeholder="Correo" required name="EmailRegister" inputMode="email"></input></div>

                                    <div className="row mb-3">
                                        <label className="form-label text-secondary" style={{color: "rgb(255,255,255)!important"}}>Repetir Contraseña</label>
                                        <div className="col-sm-6 mb-3 mb-sm-0"><input value={password} className="form-control form-control-user" type="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required name="PasswordRegister"></input></div>
                                        <div className="col-sm-6"><input className="form-control form-control-user" type="password" id="verifyPassword"  placeholder="Repetir Contraseña" required name="PasswordRegisterRepeat"></input></div>
                                    </div>

                                    <div className="row mb-3">
                                        <label className="form-label text-secondary" style={{color: "rgb(255,255,255)!important"}}>Nombres</label>
                                        <div className="col-sm-6 mb-3 mb-sm-0"><input value={nameU} className="form-control form-control-user"  type="text" onChange={(e) => setNameU(e.target.value)} placeholder="Nombres"  required name="phpFirstNameRegister" id="phpFirstNameRegister" style={{color: "rgb(255,255,255)!important", marginbottom: "5px"}}></input></div>
                                        <label className="form-label text-secondary" style={{color: "rgb(255,255,255)!important"}}>Apellidos</label>
                                        <div className="col-sm-6"><input value={lastName} className="form-control form-control-user" type="text" onChange={(e) => setLastName(e.target.value)} placeholder="Apellidos"  name="phpLastNameRegister" required id="phpLastNameRegister"></input></div>
                                        <div className="col-sm-6"><input value={createdDate} className="form-control form-control-user" type="hidden" onChange={(e) => setCreated(e.target.value)} placeholder="Apellidos"  name="dateTime" required id="dateTime"></input></div>
                                    </div>

                                    

                                    <button 
                                    className="btn btn-info mt-2 d-block btn-user w-100" 
                                    id="submitBtn" 
                                    type="submit"
                                    >Registrar Cuenta</button>
                                    <p className="mt-3 mb-0"><a className="text-info small" href="/">¿Ya tienes cuenta? ¡Ingresa!</a></p> 
                                </form>
                                <hr></hr>
                            
                        </div>
                <div className="col-lg-6 d-flex align-items-end" data-aos="fade-up" data-aos-duration="450" id="bg-block" style={{background: "url(assets/img/blog-post-image-guide.jpg) center center / cover"}}> </div>
            </div>
        </div>
        </>
    );
}

export default Register;
