import React, { useState } from "react";
import Cookies from "js-cookie";
import {Navigate} from "react-router-dom"

const Login = () => {
 
    const[usuario, setUsuario] = useState("");
    const[senha, setSenha] = useState("");
    const[login, setLogin] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();
        
        if(usuario=='jose' && senha=='123'){
            setLogin(true)
            Cookies.set("usuario", usuario, {expires:7})
        }
        else 
        alert("senha invalida")
    };
    if(login){
        return<Navigate to="/adicionar-enquete"/>
    }

        return <section className="animate__animated animate__bounceInLeft"> 
            <form onSubmit={submitForm}>
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
                <button type="submit">Acessar</button>
            </form>
             </section>

}

export default Login;