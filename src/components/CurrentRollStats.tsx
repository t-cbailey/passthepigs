import React from "react";
import pigOut from "../assets/imgs/pigOut.webp";
import sider from "../assets/imgs/sider.webp";
import razorback from "../assets/imgs/razorback.webp";
import leaningJowler from "../assets/imgs/leaningJowler.webp";
import trotter from "../assets/imgs/trotter.webp";
import snouter from "../assets/imgs/snouter.webp";
import makinBacon from "../assets/imgs/makinBacon.webp";
import { moves } from "../moves";
import { CurrentRollStatsProps } from "../../customTypes/customTypes";

function CurrentRollStats({ roll, setTurnScore }: CurrentRollStatsProps) {
  const [rollScore, setRollScore] = React.useState<number>(0);
  const roll1Index = roll.roll1 as keyof typeof moves;
  const roll2Index = roll.roll2 as keyof typeof moves;
  const r1 = roll.roll1;
  const r2 = roll.roll2;

  React.useEffect(() => {
    if (r1 && r2 && r1 === r2 && r1 !== "sider") {
      const param = ("double" + r1) as keyof typeof moves;
      setRollScore(() => {
        return moves[param].value;
      });
    } else if (r1 && r2) {
      const score = moves[r1].value + moves[r2].value;
      setRollScore(() => {
        return score;
      });
    } else setTurnScore(0);
  }, [roll]);

  React.useEffect(() => {
    setTurnScore((curr: number) => {
      return rollScore + curr;
    });
  }, [rollScore]);

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
    }
  };
  return (
    <>
      <div id="selectedMovesContainer">
        <p>{`Roll Score : ${rollScore}`}</p>
        {r1 && r2 && r1 === r2 && `Double ${moves[roll1Index].name}!`}
        <div id="smTurnContainer">
          <div className="selectedMove">
            <img className="selectedMoveImg" src={imgSelecter(r1)} alt={r1} />
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
      </div>
    </>
  );
}

export default CurrentRollStats;
