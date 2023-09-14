import React from "react";
import { PlayersProps } from "../../customTypes/customTypes";

import CurrentTurn from "./CurrentTurn";

function Play({ players, setPlayers }: PlayersProps) {
  console.log(players);
  return (
    <>
      <CurrentTurn />
    </>
  );
}

export default Play;
