import { useEffect, useState } from "react";
import Muro from "./Muro";
import { useNavigate } from "react-router-dom";
var testUser = "userTest";
var testPsswrd = "000";

function Validate(navigate){
var tmpUser = document.getElementById("phpEmailLogin");
var tmpPassword = document.getElementById("phpPasswordLogin");
//const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));

if((tmpUser.value == testUser) && (tmpPassword.value == testPsswrd))
{
    alert('Login Correcto');
    //setauthenticated(true)
    localStorage.setItem("authenticated", true);
    
    navigate("/muro");
    //alert(tmpUser.value);
    //alert(tmpPassword.value);
    
    //<href="/Muro.js"/>;
}
else
{
    alert('Login Incorrecto');
    //alert(tmpUser.value);
    //alert(tmpPassword.value);
}

}

export function LoginRegister()
{
    const navigate = useNavigate();   
    
     
return ( 
<>

<div className="container-fluid">
        <div className="row mh-100vh">
            <div className="col-10 col-sm-8 col-md-6 col-lg-6 offset-1 offset-sm-2 offset-md-3 offset-lg-0 align-self-center d-lg-flex align-items-lg-center align-self-lg-stretch p-5 rounded rounded-lg-0 my-5 my-lg-0" id="login-block" style={{background: "url(assets/img/corkboard.jpg) center center / cover"}}>
                <div className="m-auto w-lg-75 w-xl-50" data-aos="fade-up" data-aos-delay="450" id="loginSection">
                    <div style={{textalign: "center", marginbottom: "46px"}}><a className="navbar-brand" href="index.php" style={{color: "rgb(255,255,255)", fontweight: "bold", letterspacing: "1px",borderstyle: "double"}}>&nbsp;LOG IN&nbsp;</a></div>

                   
                    <form name="login">
                        <div className="form-group mb-3"><label className="form-label text-secondary" style={{color: "rgb(255,255,255)!important"}}>Correo</label><input  onInput="this.value = this.value.toUpperCase()"  id="phpEmailLogin"name="phpEmailLogin"className="form-control" type="text" required inputMode="email" placeholder="Correo"></input></div>
                        <div className="form-group mb-3"><label className="form-label text-secondary" style={{color: "rgb(255,255,255)!important"}}>Contraseña</label><input id="phpPasswordLogin" name="phpPasswordLogin" className="form-control" type="password" required  placeholder="Contraseña"></input></div>
                        <button 
                        id = "logInButton"
                        className="btn btn-info mt-2" 
                        type="button"
                        onClick={()=>{ Validate(navigate); }}
                        >Ingresar</button>
                    </form>

                    

                    <p className="mt-3 mb-0" onClick="hideLogin()" ><a className="text-info small" href="Register">¿Nuevo aqui? Registrate</a></p>
                </div>

            </div>
            <div className="col-lg-6 d-flex align-items-end" data-aos="fade-up" data-aos-duration="450" id="bg-block" style={{background: "url(assets/img/blog-post-image-guide.jpg) center center / cover"}}>
            </div>
        </div>
    </div>
</>
)

}
