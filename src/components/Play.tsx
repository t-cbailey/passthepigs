import { PlayProps } from "../../customTypes/customTypes";
import "../styling/play.css";
import CurrentTurn from "./CurrentTurn";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import TotalScores from "./TotalScores";
import TurnInfo from "./TurnInfo";
import useWindowDimensions from "../Utils";
import { useNavigate } from "react-router-dom";

function Play({ players, setPlayers, winningScore }: PlayProps) {
  const initialCurrentPlayer: number = JSON.parse(
    localStorage.getItem("currentPlayer") || "0"
  );
  const [turnScore, setTurnScore] = React.useState<number>(0);
  const [currentPlayer, setCurrentPlayer] =
    React.useState<number>(initialCurrentPlayer);
  const [win, setWin] = React.useState(false);
  const { width } = useWindowDimensions();

  const navigate = useNavigate();

  React.useEffect(() => {
    localStorage.setItem("currentPlayer", JSON.stringify(currentPlayer));
  }, [currentPlayer]);

  const handleGameReset = () => {
    const returnToStart = () => {
      setPlayers([]);
      navigate("/");
    };

    const result = confirm("Game score will be lost. Are you sure?");

    if (result === true) {
      returnToStart();
    }
  };

  return (
    <>
      <div id="resetGameButton">
        <button onClick={handleGameReset}>{"< Reset Game"}</button>
      </div>
      {width < 768 ? (
        <div id="carousel">
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 2,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            <TurnInfo
              players={players}
              currentPlayer={currentPlayer}
              win={win}
              turnScore={turnScore}
            />
            <TotalScores players={players} />
          </Carousel>
        </div>
      ) : (
        <div id="scoreInfoContainer">
          <TurnInfo
            players={players}
            currentPlayer={currentPlayer}
            win={win}
            turnScore={turnScore}
          />
          <TotalScores players={players} />
        </div>
      )}
      <CurrentTurn
        currentPlayer={currentPlayer}
        turnScore={turnScore}
        players={players}
        setPlayers={setPlayers}
        winningScore={winningScore}
        setTurnScore={setTurnScore}
        setCurrentPlayer={setCurrentPlayer}
        win={win}
        setWin={setWin}
      />
    </>
  );
}

export default Play;
