import React from "react";
import { CurrentTurnProps, Roll } from "../../customTypes/customTypes";

import "../styling/currentTurn.css";
import MoveButtons from "./MoveButtons";
import CurrentRollStats from "./CurrentRollStats";

function CurrentTurn({ players, setPlayers, winningScore }: CurrentTurnProps) {
  const [roll, setRoll] = React.useState<Roll>({ roll1: "", roll2: "" });
  const [turnScore, setTurnScore] = React.useState<number>(0);
  const [rollScore, setRollScore] = React.useState<number>(0);
  const [currentPlayer, setCurrentPlayer] = React.useState<number>(0);
  const [buttonsDisabled, setButtonsDisabled] = React.useState({
    pigOut: false,
    sider: false,
    razorback: false,
    leaningJowler: false,
    trotter: false,
    snouter: false,
    makinBacon: false,
  });
  const [win, setWin] = React.useState(false);

  React.useEffect(() => {
    const currTotal =
      players[currentPlayer].scores.length > 0
        ? players[currentPlayer].scores.reduce((a, b) => {
            return a + b;
          })
        : 0;
    if (currTotal + turnScore >= winningScore) {
      setWin(true);
    }
  }, [players, turnScore, currentPlayer]);

  if (win) {
    return <>{<h1>{`${players[currentPlayer].name} wins!`}</h1>}</>;
  } else
    return (
      <>
        <div id="turnInfoContainer">
          {players[currentPlayer] && (
            <h2>{`${players[currentPlayer]?.name}'s turn`}</h2>
          )}
          <p>{`Score this turn : ${turnScore}`}</p>
        </div>

        <CurrentRollStats
          roll={roll}
          setRoll={setRoll}
          setTurnScore={setTurnScore}
          rollScore={rollScore}
          setRollScore={setRollScore}
          setButtonsDisabled={setButtonsDisabled}
          setCurrentPlayer={setCurrentPlayer}
          currentPlayer={currentPlayer}
          players={players}
          turnScore={turnScore}
          setPlayers={setPlayers}
        />
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
