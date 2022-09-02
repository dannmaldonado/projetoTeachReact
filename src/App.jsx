import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Contato from "./components/pages/Contato";
import Depoimentos from "./components/pages/Depoimentos";
import Login from "./components/pages/Login";
import Planos from "./components/pages/Planos";

import "./style/main.css";
import "./style/header.css";
import "./style/footer.css";
import "./style/home.css";
import "./style/contato.css";
import "./style/login.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/depoimentos" element={<Depoimentos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/planos" element={<Planos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
