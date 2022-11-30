import React from "react";
import Default from "../templates/Default";

import Planos from "../molecules/Planos";
import Whats from "../atoms/whats";

export default function Home() {
  return (
    <Default>
      <section className="center">
        <Planos></Planos>
      </section>
      <Whats></Whats>
    </Default>
  );
}
