import React from "react";
import { CurrentTurnProps, Roll } from "../../customTypes/customTypes";

import "../styling/currentTurn.css";
import MoveButtons from "./MoveButtons";
import CurrentRollStats from "./CurrentRollStats";

function CurrentTurn({ players, setPlayers }: CurrentTurnProps) {
  const [roll, setRoll] = React.useState<Roll>({ roll1: "", roll2: "" });
  const [turnScore, setTurnScore] = React.useState<number>(0);
  const [buttonsDisabled, setButtonsDisabled] = React.useState({
    pigOut: false,
    sider: false,
    razorback: false,
    leaningJowler: false,
    trotter: false,
    snouter: false,
    makinBacon: false,
  });

  const handleNextRoll = () => {
    setButtonsDisabled({
      pigOut: false,
      sider: false,
      razorback: false,
      leaningJowler: false,
      trotter: false,
      snouter: false,
      makinBacon: false,
    });
    setRoll({ roll1: "", roll2: "" });
  };

  console.log(players);
  return (
    <>
      <p>{`Score this turn : ${turnScore}`}</p>
      <button onClick={handleNextRoll}>Next Roll!</button>

      <CurrentRollStats roll={roll} setTurnScore={setTurnScore} />
      <MoveButtons
        setRoll={setRoll}
        roll={roll}
        setButtonsDisabled={setButtonsDisabled}
        buttonsDisabled={buttonsDisabled}
      />
    </>
  );
}

export default CurrentTurn;
