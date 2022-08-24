import React from "react";
import Default from "../templates/Default";

import Carousel from "../molecules/Carousel";

export default function Depoimentos() {
  return (
    <Default>
      <div>{<Carousel />}</div>
    </Default>
  );
}
