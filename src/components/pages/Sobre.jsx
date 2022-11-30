import React from "react";
import Default from "../templates/Default";

import Sobre from "../molecules/Sobre";
import Whats from "../atoms/whats";

export default function AppSobre() {
  return (
    <Default>
      <Sobre></Sobre>
      <Whats></Whats>
    </Default>
  );
}
