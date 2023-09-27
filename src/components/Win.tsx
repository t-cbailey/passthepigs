import Confetti from "react-confetti";
import "../styling/currentTurn.css";
import { WinProps, Player } from "../../customTypes/customTypes";
import { useNavigate } from "react-router-dom";
import "../styling/win.css";

function Win({
  setTurnScore,
  setWin,
  setPlayers,
  players,
  setRollScore,
  setCurrentPlayer,
  setButtonsDisabled,
  setRoll,
}: WinProps) {
  const navigate = useNavigate();

  const handlePlayAgain = () => {
    setPlayers((curr: Player[]) => {
      const temp = [...curr];
      temp.forEach((player) => {
        player.scores = [];
      });
      return temp;
    });
    setRollScore(0);
    setTurnScore(0);
    setCurrentPlayer((curr: number) => {
      if (curr === players.length - 1) {
        return 0;
      } else return curr + 1;
    });
    setButtonsDisabled({
      pigOut: false,
      siderNoDot: false,
      siderWithDot: false,
      razorback: false,
      leaningJowler: false,
      trotter: false,
      snouter: false,
      makinBacon: false,
    });
    setRoll({ roll1: "", roll2: "" });
    setWin(false);
  };

  const handleReset = () => {
    setPlayers([]);
    setRollScore(0);
    setTurnScore(0);
    setCurrentPlayer(0);
    setButtonsDisabled({
      pigOut: false,
      siderNoDot: false,
      siderWithDot: false,
      razorback: false,
      leaningJowler: false,
      trotter: false,
      snouter: false,
      makinBacon: false,
    });
    setRoll({ roll1: "", roll2: "" });
    setWin(false);
    navigate("/");
  };

  return (
    <>
      <Confetti width={window.innerWidth} height={window.innerHeight} />

      <div id="gameEndButtonContainer">
        <button onClick={handlePlayAgain}>Play Again</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}
export default Win;
