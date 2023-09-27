import React from "react";
import siderNoDot from "../assets/imgs/siderNoDot.webp";
import siderWithDot from "../assets/imgs/siderWithDot.webp";
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
  const [turnButtonsDisabled, setTurnButtonsDisabled] = React.useState(false);
  const roll1Index = roll.roll1 as keyof typeof moves;
  const roll2Index = roll.roll2 as keyof typeof moves;
  const r1 = roll.roll1;
  const r2 = roll.roll2;

  React.useEffect(() => {
    if (
      (r1 === "siderWithDot" && r2 === "siderNoDot") ||
      (r1 === "siderNoDot" && r2 === "siderWithDot")
    ) {
      handlePigOut();
    } else if (r1 === "makinBacon" || r2 === "makinBacon") {
      handleMakinBacon();
    } else if (
      r1 &&
      r2 &&
      r1 === r2 &&
      r1 !== "siderWithDot" &&
      r1 !== "siderNoDot" &&
      r2 !== "siderWithDot" &&
      r2 !== "siderNoDot"
    ) {
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
      siderNoDot: false,
      siderWithDot: false,
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
      siderNoDot: false,
      siderWithDot: false,
      razorback: false,
      leaningJowler: false,
      trotter: false,
      snouter: false,
      makinBacon: false,
    });
    setCurrentPlayer((curr: number) => {
      return curr + 1 < players.length ? curr + 1 : 0;
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
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
    setTurnButtonsDisabled(true);
    setRollScore(() => {
      return "PIG OUT!!!";
    });
    setTimeout(() => {
      setTurnScore(0);
      setRollScore(0);
      handleEndTurn();
      setTurnButtonsDisabled(false);
    }, 5000);
  };

  const handleMakinBacon = () => {
    setTurnButtonsDisabled(true);
    setRollScore(() => {
      return "MAKIN' BACON!!!";
    });
    setTimeout(() => {
      setTurnScore(0);
      setRollScore(0);
      setPlayers((curr: Player[]) => {
        const temp = [...curr];
        temp[currentPlayer].scores = [];
        return temp;
      });
      handleEndTurn();
      setTurnButtonsDisabled(false);
    }, 5000);
  };

  const imgSelecter = (img: string) => {
    switch (img) {
      case "siderNoDot":
        return siderNoDot;
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
      case "siderWithDot":
        return siderWithDot;
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
        <button
          disabled={turnButtonsDisabled}
          className="turnProgressionButton"
          onClick={handleKeepPoints}
        >
          Keep points and quit
        </button>
        <button
          disabled={turnButtonsDisabled}
          className="turnProgressionButton"
          onClick={handleNextRoll}
        >
          {"Pig Head! (roll again)"}
        </button>
      </div>
    </>
  );
}

export default CurrentRollStats;
