import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Contato from "./components/pages/Contato";
import Depoimentos from "./components/pages/Depoimentos";
import Login from "./components/pages/Login";

import "./style/style.css";
import "./style/style1.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/depoimentos" element={<Depoimentos />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
