import React from "react";
import { CurrentTurnProps } from "../../customTypes/customTypes";
import combinedScore from "../assets/imgs/combinedScore.webp";
import leaningJowler from "../assets/imgs/leaningJowler.webp";
import makinBacon from "../assets/imgs/makinBacon.webp";
import piggyBack from "../assets/imgs/piggyBack.webp";
import pigOut from "../assets/imgs/pigOut.webp";
import sider from "../assets/imgs/sider.webp";
import snouter from "../assets/imgs/snouter.webp";

function CurrentTurn() {
  return (
    <>
      <div>
        <ul>
          <li>
            <button>
              <img src={pigOut} alt="pig out" />
            </button>
          </li>
          <li>
            <button>
              <img src={makinBacon} alt="makin bacon" />
            </button>
          </li>
          <li>
            <button>
              <img src={leaningJowler} alt="leaning jowler" />
            </button>
          </li>

          <li>
            <button>
              <img src={sider} alt="sider" />
            </button>
          </li>
          <li>
            <button>
              <img src={snouter} alt="snouter" />
            </button>
          </li>
          <li>
            <button>
              <img src={piggyBack} alt="piggyback" />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default CurrentTurn;
