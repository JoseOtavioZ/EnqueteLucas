import React from "react";
import { Route, Routes } from "react-router-dom";
import ListarEnquete from "../pages/ListarEnquetes";
import Sobre from "../pages/Sobre";
import AdicionarEnquete from "../pages/AdicionarEnquete";
import Login from "../pages/Login";
import EnqueteProvider from "./EnqueteContext";

function Rotas() {
  return (
    <EnqueteProvider>
      <Routes>
        <Route path="/listar-enquetes" element={<ListarEnquete />}></Route>
        <Route path="/sobre" element={<Sobre />}></Route>
        <Route path="/adicionar-enquete" element={<AdicionarEnquete />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </EnqueteProvider>
  );
}

export default Rotas;
