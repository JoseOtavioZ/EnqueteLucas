import React from "react";
import { useState } from "react";
import { useEnquetes } from "../config/EnqueteContext";

const AdicionarEnquete = () => {
  const { addEnquete } = useEnquetes();
  const [enquete, setEnquete] = useState("");
  const [opcoes, setOpcoes] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    for (let i = 0; i < opcoes.length; i++) {
      if (!opcoes[i]) {
        return false;
      }
    }

    addEnquete({ enquete, opcoes });
    setEnquete("");
    setOpcoes([""]);
  };
  const addOpcao = () => {
    setOpcoes([...opcoes, ""]);
  };

  const handleOpcaoChange = (e, index) => {
    const newOpcoes = [...opcoes];
    newOpcoes[index] = e.target.value;
    setOpcoes(newOpcoes);
  };

  return (
    <section>
      <form onSubmit={submitForm}>
        <label> Qual o nome da enquete? </label>
        <br />
        <input
          autoFocus
          type="text"
          placeholder="Nome da enquete"
          value={enquete}
          onChange={(e) => setEnquete(e.target.value)}
        />

        {opcoes.map((option, index) => (
          <div key={index}>
            <label placeholder="Adicionar opção">
              {" "}
              {`Opção ${index + 1}`}{" "}
            </label>
            <input
              type="text"
              value={option}
              onChange={(e) => handleOpcaoChange(e, index)}
            />
          </div>
        ))}
        <br />
        {enquete ? (
          <button
            className="animate__animated animate__zoomIn"
            type="submit"
            onClick={addOpcao}
          >
            Adicionar opção
          </button>
        ) : (
          ""
        )}

        {opcoes.length > 0 ? <button type="submit">Salvar</button> : ""}
      </form>
    </section>
  );
};

export default AdicionarEnquete;
