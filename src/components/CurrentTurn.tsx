import React from "react";
import { CurrentTurnProps, Roll } from "../../customTypes/customTypes";

import "../styling/currentTurn.css";
import MoveButtons from "./MoveButtons";
import CurrentRollStats from "./CurrentRollStats";

function CurrentTurn({ players, setPlayers }: CurrentTurnProps) {
  const [roll, setRoll] = React.useState<Roll>({ roll1: "", roll2: "" });
  const [turnScore, setTurnScore] = React.useState<number>(0);

  console.log(players);
  return (
    <>
      <p>{`Score this turn : ${turnScore}`}</p>

      <CurrentRollStats roll={roll} setTurnScore={setTurnScore} />
      <MoveButtons setRoll={setRoll} roll={roll} />
    </>
  );
}

export default CurrentTurn;
