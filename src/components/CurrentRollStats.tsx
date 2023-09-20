import React from "react";
import pigOut from "../assets/imgs/pigOut.webp";
import sider from "../assets/imgs/sider.webp";
import razorback from "../assets/imgs/razorback.webp";
import leaningJowler from "../assets/imgs/leaningJowler.webp";
import trotter from "../assets/imgs/trotter.webp";
import snouter from "../assets/imgs/snouter.webp";
import makinBacon from "../assets/imgs/makinBacon.webp";
import blank from "../assets/imgs/blank.webp";
import { moves } from "../moves";
import { CurrentRollStatsProps, Player } from "../../customTypes/customTypes";

function CurrentRollStats({
  roll,
  setRoll,
  setTurnScore,
  rollScore,
  setRollScore,
  setButtonsDisabled,
  setCurrentPlayer,
  currentPlayer,
  players,
  turnScore,
  setPlayers,
}: CurrentRollStatsProps) {
  const roll1Index = roll.roll1 as keyof typeof moves;
  const roll2Index = roll.roll2 as keyof typeof moves;
  const r1 = roll.roll1;
  const r2 = roll.roll2;

  console.log(r1);

  React.useEffect(() => {
    if (r1 === "pigOut" || r2 === "pigOut") {
      handlePigOut();
    } else if (r1 === "makinBacon" || r2 === "makinBacon") {
      handleMakinBacon();
    } else if (r1 && r2 && r1 === r2 && r1 !== "sider") {
      const param = ("double" + r1) as keyof typeof moves;
      setRollScore(() => {
        return moves[param].value;
      });
    } else if (r1 && r2) {
      const score = moves[r1].value + moves[r2].value;
      setRollScore(() => {
        return score;
      });
    } else setRollScore(0);
  }, [r1, r2]);

  React.useEffect(() => {
    setTurnScore((curr: number) => {
      return rollScore + curr;
    });
  }, [rollScore]);

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
    setRollScore(0);
  };

  const handleEndTurn = () => {
    setRollScore(0);
    setTurnScore(0);
    setRoll({ roll1: "", roll2: "" });
    setButtonsDisabled({
      pigOut: false,
      sider: false,
      razorback: false,
      leaningJowler: false,
      trotter: false,
      snouter: false,
      makinBacon: false,
    });
    setCurrentPlayer((curr: number) => {
      return curr + 1 < players.length ? curr + 1 : 0;
    });
  };

  const handleKeepPoints = () => {
    setPlayers((curr: Player[]) => {
      const temp = [...curr];
      temp[currentPlayer].scores.push(turnScore);
      return temp;
    });
    handleEndTurn();
  };

  const handlePigOut = () => {
    setTurnScore(0);
    setRollScore(0);
    handleEndTurn();
  };

  const handleMakinBacon = () => {
    setTurnScore(0);
    setRollScore(0);
    setPlayers((curr: Player[]) => {
      const temp = [...curr];
      temp[currentPlayer].scores = [];
      return temp;
    });
    handleEndTurn();
  };

  const imgSelecter = (img: string) => {
    switch (img) {
      case "sider":
        return sider;
      case "razorback":
        return razorback;
      case "leaningJowler":
        return leaningJowler;
      case "trotter":
        return trotter;
      case "snouter":
        return snouter;
      case "makinBacon":
        return makinBacon;
      case "pigOut":
        return pigOut;
      case "":
        return blank;
    }
  };
  return (
    <>
      <div id="selectedMovesContainer">
        <p>{`Roll Score : ${rollScore}`}</p>
        {r1 && r2 && r1 === r2 && `Double ${moves[roll1Index].name}!`}
        <div id="smTurnContainer">
          <div className="selectedMove">
            <img className="selectedMoveImg" src={imgSelecter(r1)} alt={""} />
            <p className="smTurnText">
              {r1 && r1 !== r2 && moves[roll1Index].name}
            </p>
          </div>
          <div className="selectedMove">
            <img
              className="selectedMoveImg"
              src={imgSelecter(r2)}
              alt={roll.roll2}
            />
            <p className="smTurnText">
              {r2 && r1 !== r2 && moves[roll2Index].name}
            </p>
          </div>
        </div>
        <button className="turnProgressionButton" onClick={handleKeepPoints}>
          Keep points and quit
        </button>
        <button className="turnProgressionButton" onClick={handleNextRoll}>
          {"Pig Head! (roll again)"}
        </button>
      </div>
    </>
  );
}

export default CurrentRollStats;