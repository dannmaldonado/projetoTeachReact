import React from "react";
import Default from "../templates/Default";

import Home from "../molecules/Home";
import Whats from "../atoms/whats";

export default function AppHome() {
  return (
    <Default>
      <Home></Home>
      <Whats></Whats>
    </Default>
  );
}
