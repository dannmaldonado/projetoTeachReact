import React from "react";

import Default from "../templates/Default";
import { Contato } from "../molecules";
import Whats from "../atoms/whats"

export default function AppContato() {
  return (
    <Default>
      <Contato></Contato>
      <Whats></Whats>
    </Default>
  );
}
