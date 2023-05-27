const MiPerfil = () => {
    return(
        <div style={{ paddingLeft: 175 }} className="container mt-5 justify-content-center">
            <div className="card p-3">
                <div className="d-flex align-items-center">
                    <div className="image">
                <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" class="rounded" width="155" ></img>
                </div>
                <div className="ml-3 w-100"> 
                   <h4 className="mb-0 mt-0">Alex HMorrision</h4>
                   <span style={{ fontSize: 17 }}>Senior Journalist</span>
                   <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">

                    <div className="d-flex flex-column">
                        <span className="descripcion" style={{ fontSize: 15 }}>¡Qué tal! Me llamo Alex.</span>
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

                   <div className="button mt-2 d-flex flex-row align-items-center">
                    {/*<button className="btn btn-sm btn-outline-primary w-100">Chat</button>*/}
                    {/* <button className="btn btn-sm btn-primary w-100 ml-2">Editar</button> */}  
                    <button style={{ width: 100 }} className="btn btn-sm btn-primary ">Editar</button>
                   </div>
                </div>           
                </div>
            </div>
         </div>
    );
}

export default MiPerfil;