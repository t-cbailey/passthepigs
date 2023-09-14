import React from "react";
import { CurrentTurnProps, Roll } from "../../customTypes/customTypes";
import leaningJowler from "../assets/imgs/leaningJowler.webp";
import makinBacon from "../assets/imgs/makinBacon.webp";
import piggyBack from "../assets/imgs/piggyBack.webp";
import pigOut from "../assets/imgs/pigOut.webp";
import sider from "../assets/imgs/sider.webp";
import snouter from "../assets/imgs/snouter.webp";

function CurrentTurn() {
  const [roll, setRoll] = React.useState<Roll>({ roll1: "", roll2: "" });
  const [buttonsDisabled, setButtonsDisabled] = React.useState({
    pigOut: false,
    makinBacon: false,
    leaningJowler: false,
    sider: false,
    snouter: false,
    piggyBack: false,
  });

  const handleSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { currentTarget } = e;
    const { name } = currentTarget as HTMLButtonElement;
    const doubleRolls = ["sider", "leaningJowler", "snouter"];
    const singleRolls = ["pigOut", "makinBacon", "piggyback"];

    if (doubleRolls.includes(name) && roll.roll1 === "") {
      setRoll({ roll1: name, roll2: roll.roll2 });
      disableSingleButtons();
    } else if (doubleRolls.includes(name) && roll.roll1 !== "") {
      setRoll({ roll1: roll.roll1, roll2: name });
      disableAllButtons();
    }
    if (singleRolls.includes(name)) {
      setRoll({ roll1: name, roll2: roll.roll2 });
      disableAllButtons();
    }
  };

  const disableAllButtons = () => {
    setButtonsDisabled({
      pigOut: true,
      makinBacon: true,
      leaningJowler: true,
      sider: true,
      snouter: true,
      piggyBack: true,
    });
  };
  const disableSingleButtons = () => {
    setButtonsDisabled({
      pigOut: true,
      makinBacon: true,
      leaningJowler: false,
      sider: false,
      snouter: false,
      piggyBack: true,
    });
  };

  console.log(roll);
  return (
    <>
      <div>
        <p>selected moves</p>
        <p>{roll.roll1}</p>
        <p>{roll.roll2}</p>
      </div>
      <div>
        <ul>
          <li>
            <button
              disabled={buttonsDisabled.pigOut}
              name="pigOut"
              onClick={handleSelect}
            >
              <img src={pigOut} alt="pig out" />
            </button>
          </li>
          <li>
            <button
              disabled={buttonsDisabled.makinBacon}
              name="makinBacon"
              onClick={handleSelect}
            >
              <img src={makinBacon} alt="makin bacon" />
            </button>
          </li>
          <li>
            <button
              disabled={buttonsDisabled.leaningJowler}
              name="leaningJowler"
              onClick={handleSelect}
            >
              <img src={leaningJowler} alt="leaning jowler" />
            </button>
          </li>

          <li>
            <button
              disabled={buttonsDisabled.sider}
              name="sider"
              onClick={handleSelect}
            >
              <img src={sider} alt="sider" />
            </button>
          </li>
          <li>
            <button
              disabled={buttonsDisabled.snouter}
              name="snouter"
              onClick={handleSelect}
            >
              <img src={snouter} alt="snouter" />
            </button>
          </li>
          <li>
            <button
              disabled={buttonsDisabled.piggyBack}
              name="piggyBack"
              onClick={handleSelect}
            >
              <img src={piggyBack} alt="piggyback" />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default CurrentTurn;
