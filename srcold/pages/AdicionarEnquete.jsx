import React, { useState } from "react";

const AdicionarEnquete = () => {
  const [enquete, setEnquete] = useState("");
  const [opcoes, setOpcoes] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
  };

  const addOpcao = () => {
    setOpcoes([...opcoes, ""]);
  };

  const handleOpcaoChange = (e, index) => {
    const newOpcoes = [...opcoes];
    console.log(newOpcoes);
    newOpcoes[index] = e.target.value;
    setOpcoes(newOpcoes);
  };
  return (
    <section>
      <form onSubmit={submitForm}>
        <label>Titulo da enquete</label>
        <br />
        <input
          autoFocus
          type="text"
          value={enquete}
          onChange={(e) => setEnquete(e.target.value)}
        ></input>
        {opcoes.map((option, index) => (
          <div key={index}>
            <label>{`Opção ${index + 1}`}</label>
            <input
              type="text"
              value={option}
              onChange={(e) => handleOpcaoChange(e, index)}
            />
          </div>
        ))}
        <br />
        {enquete ? (
          <button type="submit" onClick={addOpcao}>
            Adicionar opção
          </button>
        ) : (
          ""
        )}
        <br />
        {opcoes.length > 0 ? <button type="submit">Salvar enquete</button> : ""}
      </form>
    </section>
  );
};

export default AdicionarEnquete;
