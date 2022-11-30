import React from "react";
import Default from "../templates/Default";

import Home from "../molecules/Home";
import Planos from "../molecules/Planos";
import Carousel from "../molecules/Carousel";
import Sobre from "../molecules/Sobre";
import Contato from "../molecules/Contato";
import Whats from "../atoms/whats";

export default function AppHome() {
  return (
    <Default>
      <Home></Home>
      <section className="center">
        <Planos></Planos>
      </section>
      <div className="carouselDepoimentos">
        <Carousel></Carousel>
      </div>
      <Sobre></Sobre>
      <Contato></Contato>
      <Whats></Whats>
    </Default>
  );
}
