import { MoveButtonsProps, SingleRoll } from "../../customTypes/customTypes";
import React from "react";
import siderWithDot from "../assets/imgs/siderWithDot.webp";
import siderNoDot from "../assets/imgs/siderNoDot.webp";
import razorback from "../assets/imgs/razorback.webp";
import leaningJowler from "../assets/imgs/leaningJowler.webp";
import trotter from "../assets/imgs/trotter.webp";
import snouter from "../assets/imgs/snouter.webp";
import makinBacon from "../assets/imgs/makinBacon.webp";
import { moves } from "../moves";

function MoveButtons({
  setRoll,
  roll,
  setButtonsDisabled,
  buttonsDisabled,
}: MoveButtonsProps) {
  const handleSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { currentTarget } = e;
    const { name } = currentTarget as SingleRoll;
    const doubleRolls = [
      "siderWithDot",
      "siderNoDot",
      "leaningJowler",
      "snouter",
      "razorback",
      "trotter",
    ];
    const singleRolls = ["makinBacon"];

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

  const disableAllButtons = () => {
    setButtonsDisabled({
      siderNoDot: true,
      siderWithDot: true,
      razorback: true,
      leaningJowler: true,
      trotter: true,
      snouter: true,
      makinBacon: true,
    });
  };
  const disableSingleButtons = () => {
    setButtonsDisabled({
      siderNoDot: false,
      siderWithDot: false,
      razorback: false,
      leaningJowler: false,
      trotter: false,
      snouter: false,
      makinBacon: true,
    });
  };

  return (
    <>
      <ul id="moveButtonsContainer">
        <li className="singleMoveButtonContainer">
          <button
            className="moveButton"
            disabled={buttonsDisabled.siderWithDot}
            name="siderWithDot"
            onClick={handleSelect}
          >
            <img className="pigImg" src={siderWithDot} alt="sider with dot" />
            <p className="turnButtonText">{moves.siderWithDot.name}</p>
          </button>
        </li>
        <li className="singleMoveButtonContainer">
          <button
            className="moveButton"
            disabled={buttonsDisabled.siderNoDot}
            name="siderNoDot"
            onClick={handleSelect}
          >
            <img className="pigImg" src={siderNoDot} alt="sider no dot" />
            <p className="turnButtonText">{moves.siderNoDot.name}</p>
          </button>
        </li>
        <li className="singleMoveButtonContainer">
          <button
            className="moveButton"
            disabled={buttonsDisabled.razorback}
            name="razorback"
            onClick={handleSelect}
          >
            <img className="pigImg" src={razorback} alt="razorback" />
            <p className="turnButtonText">{moves.razorback.name}</p>
          </button>
        </li>
        <li className="singleMoveButtonContainer">
          <button
            className="moveButton"
            disabled={buttonsDisabled.leaningJowler}
            name="leaningJowler"
            onClick={handleSelect}
          >
            <img className="pigImg" src={leaningJowler} alt="leaning jowler" />
            <p className="turnButtonText">{moves.leaningJowler.name}</p>
          </button>
        </li>
        <li className="singleMoveButtonContainer">
          <button
            className="moveButton"
            disabled={buttonsDisabled.trotter}
            name="trotter"
            onClick={handleSelect}
          >
            <img className="pigImg" src={trotter} alt="trotter" />

            <p className="turnButtonText">{moves.trotter.name}</p>
          </button>
        </li>
        <li className="singleMoveButtonContainer">
          <button
            className="moveButton"
            disabled={buttonsDisabled.snouter}
            name="snouter"
            onClick={handleSelect}
          >
            <img className="pigImg" src={snouter} alt="snouter" />
            <p className="turnButtonText">{moves.snouter.name}</p>
          </button>
        </li>
        <li className="singleMoveButtonContainer">
          <button
            className="moveButton"
            disabled={buttonsDisabled.makinBacon}
            name="makinBacon"
            onClick={handleSelect}
          >
            <img className="pigImg" src={makinBacon} alt="makin bacon" />
            <p className="turnButtonText">{moves.makinBacon.name}</p>
          </button>
        </li>
      </ul>
    </>
  );
}

export default MoveButtons;
