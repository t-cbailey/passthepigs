import React from "react";
import { CurrentTurnProps } from "../../customTypes/customTypes";
import pigOut from "../assets/imgs/pigOut.webp";
import sider from "../assets/imgs/sider.webp";
import razorback from "../assets/imgs/razorback.webp";
import leaningJowler from "../assets/imgs/leaningJowler.webp";
import trotter from "../assets/imgs/trotter.webp";
import snouter from "../assets/imgs/snouter.webp";
import makinBacon from "../assets/imgs/makinBacon.webp";
import "../styling/currentTurn.css";

function CurrentTurn() {
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

  type Roll = {
    roll1: keyof typeof moves | "";
    roll2: keyof typeof moves | "";
  };
  type singleRoll = { name: keyof typeof moves };

  const handleSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { currentTarget } = e;
    const { name } = currentTarget as singleRoll;
    const doubleRolls = [
      "sider",
      "leaningJowler",
      "snouter",
      "razorback",
      "trotter",
    ];
    const singleRolls = ["pigOut", "makinBacon"];

    if (doubleRolls.includes(name) && roll.roll1 === "") {
      setRoll({ roll1: name, roll2: roll.roll2 });
      disableSingleButtons();
    } else if (doubleRolls.includes(name) && roll.roll1 !== "") {
      setRoll({ roll1: roll.roll1, roll2: name });
      disableAllButtons();
    } else if (singleRolls.includes(name)) {
      setRoll({ roll1: name, roll2: roll.roll2 });
      disableAllButtons();
    }
  };

  const moves = {
    sider: { name: "Sider", value: 1 },
    razorback: { name: "Razorback", value: 5 },
    leaningJowler: { name: "Leaning Jowler", value: 15 },
    trotter: { name: "Trotter", value: 5 },
    snouter: { name: "Snouter", value: 10 },
    doublerazorback: { name: "Double Razorback", value: 20 },
    doubleleaningJowler: { name: "Double Leaning Jowler", value: 60 },
    doubletrotter: { name: "Double Trotter", value: 20 },
    doublesnouter: { name: "Double Snouter", value: 40 },
    pigOut: { name: "Pig Out!", value: 0 },
    makinBacon: { name: "Makin' Bacon!", value: 0 },
  };
  const r1 = roll.roll1;
  const r2 = roll.roll2;

  React.useEffect(() => {
    if (r1 && r2 && r1 === r2 && r1 !== "sider") {
      const param = ("double" + r1) as keyof typeof moves;
      setTurnScore((curr) => {
        return moves[param].value + curr;
      });
    } else if (r1 && r2) {
      const score = moves[r1].value + moves[r2].value;
      setTurnScore((curr) => {
        return score + curr;
      });
    } else setTurnScore(0);
  }, [roll]);

  const disableAllButtons = () => {
    setButtonsDisabled({
      pigOut: true,
      sider: true,
      razorback: true,
      leaningJowler: true,
      trotter: true,
      snouter: true,
      makinBacon: true,
    });
  };
  const disableSingleButtons = () => {
    setButtonsDisabled({
      pigOut: true,
      sider: false,
      razorback: false,
      leaningJowler: false,
      trotter: false,
      snouter: false,
      makinBacon: true,
    });
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
    }
  };

  console.log(roll);
  const roll1Index = roll.roll1 as keyof typeof moves;
  const roll2Index = roll.roll2 as keyof typeof moves;
  return (
    <>
      <div>
        <p>{`Score this turn : ${turnScore}`}</p>
        <p>selected moves</p>
        {r1 && r2 && r1 === r2 && `Double ${moves[roll1Index].name}!`}
        <div>
          <img
            className="selectedMove"
            src={imgSelecter(roll.roll1)}
            alt={roll.roll1}
          />
          <p>{r1 && r1 !== r2 && moves[roll1Index].name}</p>
        </div>
        <div>
          <img
            className="selectedMove"
            src={imgSelecter(roll.roll2)}
            alt={roll.roll2}
          />
          <p>{r2 && r1 !== r2 && moves[roll2Index].name}</p>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <button
              className="turnButton"
              disabled={buttonsDisabled.pigOut}
              name="pigOut"
              onClick={handleSelect}
            >
              <img className="pigImg" src={pigOut} alt="pig out" />
              <p>{moves.pigOut.name}</p>
            </button>
          </li>
          <li>
            <button
              className="turnButton"
              disabled={buttonsDisabled.sider}
              name="sider"
              onClick={handleSelect}
            >
              <img className="pigImg" src={sider} alt="sider" />
              <p>{moves.sider.name}</p>
            </button>
          </li>
          <li>
            <button
              className="turnButton"
              disabled={buttonsDisabled.razorback}
              name="razorback"
              onClick={handleSelect}
            >
              <img className="pigImg" src={razorback} alt="razorback" />
              <p>{moves.razorback.name}</p>
            </button>
          </li>
          <li>
            <button
              className="turnButton"
              disabled={buttonsDisabled.leaningJowler}
              name="leaningJowler"
              onClick={handleSelect}
            >
              <img
                className="pigImg"
                src={leaningJowler}
                alt="leaning jowler"
              />
              <p>{moves.leaningJowler.name}</p>
            </button>
          </li>
          <li>
            <button
              className="turnButton"
              disabled={buttonsDisabled.trotter}
              name="trotter"
              onClick={handleSelect}
            >
              <img className="pigImg" src={trotter} alt="trotter" />

              <p>{moves.trotter.name}</p>
            </button>
          </li>
          <li>
            <button
              className="turnButton"
              disabled={buttonsDisabled.snouter}
              name="snouter"
              onClick={handleSelect}
            >
              <img className="pigImg" src={snouter} alt="snouter" />
              <p>{moves.snouter.name}</p>
            </button>
          </li>
          <li>
            <button
              className="turnButton"
              disabled={buttonsDisabled.makinBacon}
              name="makinBacon"
              onClick={handleSelect}
            >
              <img className="pigImg" src={makinBacon} alt="makin bacon" />
              <p>{moves.makinBacon.name}</p>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default CurrentTurn;
