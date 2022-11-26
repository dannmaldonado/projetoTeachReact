import React from "react";
import "../../style/sobre.css";

import Professora from "../../imagens/professora.png";

export default function AppHome() {
  return (
    <section className="row">
      <div className="col-sm-12 col-lg-5">
        <p className="text-sobre">
          A Teach <br></br> oferece soluções complementas 
          <br></br> para digitalizar sua escola!
        </p>
      </div>

      <div className="col-sm-12 col-lg-7">
        <img
          className="img-prof"
          src={Professora}
          alt="Pessoa de cor clara sentada a mesa com um tablet na mão e um notebook em sua"
        />
      </div>
    </section>
  );
}
