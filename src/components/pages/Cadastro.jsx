import React from "react";
import Default from "../templates/Default";
import { Cadastro } from "../molecules";
import Whats from "../atoms/whats";

import logo from "../../logo/Logo.png";

export default function AppCadastro() {
  return (
    <Default>
      <section className="grid">
        <div className="logo-login">
          <img
            src={logo}
            alt="Logo descrevendo o nome da empresa, Teach sua escola virtual, está na cor laranja com livro verde"
            width="300"
            height="150"
          />
        </div>
        <div className="min-largura">
          <Cadastro></Cadastro>
        </div>
      </section>
      <Whats></Whats>
    </Default>
  );
}
