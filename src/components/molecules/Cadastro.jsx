import React from "react";

import imgCadastro from "../../imagens/cadastro.png";

export default function contato() {
  return (
    <section className="contato row">
      <div className="menino col-sm-12 col-lg-6">
        <img
          className="imgMenino"
          src={imgCadastro}
          alt="Ilustarção de um menino de cor parda com uma camiseta verde em uma sala de aula com a mão esquerda levantada pedindo ajuda."
        />
      </div>

      <form id="formContato" className="col-sm-12 col-lg-6" action="">
        <fieldset className="">
          <h2 className="faleconosco">Cadastro</h2>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="txtNome"
              placeholder="Digite seu nome completo aqui"
            />
            <label for="floatingInput">Nome:</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="txtEmail"
              placeholder="seu@email.com"
            />
            <label for="floatingInput">Email:</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="tel"
              className="form-control"
              id="txtFone"
              placeholder="(00) 00000-0000"
            />
            <label for="floatingInput">Telefone:</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="txtCidade"
              placeholder="Digite seu CPF"
            />
            <label for="floatingInput">Cpf:</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="txtCidade"
              placeholder="Senha"
            />
            <label for="floatingInput">Senha:</label>
          </div>

          <div className="btnEnviar">
            <button id="btnEnviar" className="enviar">
              Cadastrar
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
}
