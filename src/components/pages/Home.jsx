import React from "react";
import Default from "../templates/Default";

import logo from "../../logo/Logo.png";

export default function Home() {
  return (
    <Default>
      <section className="home container-fluid">
        <div className="logo">
          <img
            className="img-fluid"
            src={logo}
            alt="Logo da empresa com a escrita Teach sua escola digital na cor laranja com o icone de um livro aberto na cor verde"
          />
        </div>
      </section>
    </Default>
  );
}
