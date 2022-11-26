import React from "react";
import Default from "../templates/Default";

import "../../style/carousel.css"

import Carousel from "../molecules/Carousel";

export default function Depoimentos() {
  return (
    <Default>
      <div className="carouselDepoimentos">
        <Carousel></Carousel>
      </div>
    </Default>
  );
}
