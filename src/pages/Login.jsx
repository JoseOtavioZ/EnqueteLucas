import React, { useState } from "react";

const Login = () => {
 
    const[usuario, setUsuario] = useState("");
    const[senha, setSenha] = useState("");

        return <section className="animate__animated animate__bounceInLeft"> 
            <form>
                <label>Usuario</label>
                <br />
                <input 
                type="text" 
                value={usuario} 
                onChange={(e)=> setUsuario(e.target.value)}></input>
                <br />
                <label>Senha</label>
                <br />
                <input 
                type="password" 
                value={senha} 
                onChange={(e)=> setSenha(e.target.value)}></input>
                <button className="animate__animated animate__jello" type="submit">Acessar</button>
            </form>
             </section>

}

export default Login;