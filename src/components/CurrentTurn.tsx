import React from "react";
import { CurrentTurnProps, Roll, Player } from "../../customTypes/customTypes";
import MoveButtons from "./MoveButtons";
import CurrentRollStats from "./CurrentRollStats";
import Win from "./Win";

function CurrentTurn({
  players,
  setPlayers,
  winningScore,
  currentPlayer,
  turnScore,
  setCurrentPlayer,
  setTurnScore,
}: CurrentTurnProps) {
  const [roll, setRoll] = React.useState<Roll>({ roll1: "", roll2: "" });
  const [rollScore, setRollScore] = React.useState<number>(0);
  const [buttonsDisabled, setButtonsDisabled] = React.useState({
    pigOut: false,
    siderNoDot: false,
    siderWithDot: false,
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

  React.useEffect(() => {
    setPlayers((curr: Player[]) => {
      const temp = [...curr];
      temp[currentPlayer].scores.push(turnScore);
      return temp;
    });
  }, [win]);

  if (win) {
    return (
      <>
        <Win
          setPlayers={setPlayers}
          players={players}
          currentPlayer={currentPlayer}
          setTurnScore={setTurnScore}
          setWin={setWin}
          setRollScore={setRollScore}
          setCurrentPlayer={setCurrentPlayer}
          setButtonsDisabled={setButtonsDisabled}
          setRoll={setRoll}
        />
      </>
    );
  } else
    return (
      <>
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
