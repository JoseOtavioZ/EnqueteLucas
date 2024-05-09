import React, { useState } from "react";

const AdicionarEnquete = () => {
 
        const[enquete, setEnquete]=useState("");
        const[opcoes, setOpcoes] = useState([]);

        const submitForm = () =>{
                const submitForm = (e) =>
                e.preventDefault();
        }

        return (
        <section> 
                <form onSubmit={submitForm}>
                <label>Titulo da enquete</label>
                <br/>
                <input type="text" onChange={(e) =>setEnquete(e.target.value)}></input>
                <label>Descrição da enquete</label>
                <input type="text"></input>
                <button>Criar</button>
                </form>        
        </section>
);
}

export default AdicionarEnquete;