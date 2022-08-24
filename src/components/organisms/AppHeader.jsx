import React from "react";

import logo from "../../logo/LogoMenu.png";

export default function AppHeader() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light navbar-cunstom">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" width="80%" height="" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li>
              <a href="#" className="nav-link px-2 link-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-dark">
                Soluções e Recursos
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-dark">
                Clientes
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-dark">
                Planos
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-dark">
                Sobre
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-dark">
                Contato
              </a>
            </li>
          </ul>

          <div className="navbar-nav">
            <li>
              <a href="login.html" className="nav-link px-2 link-dark">
                Login
              </a>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
}
