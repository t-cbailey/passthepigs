import { PlayProps } from "../../customTypes/customTypes";
import "../styling/play.css";
import CurrentTurn from "./CurrentTurn";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";

function Play({ players, setPlayers, winningScore }: PlayProps) {
  const [turnScore, setTurnScore] = React.useState<number>(0);
  const [currentPlayer, setCurrentPlayer] = React.useState<number>(0);
  return (
    <>
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
            items: 3,
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
        <div id="turnInfoContainer">
          {players[currentPlayer] && (
            <h2>{`${players[currentPlayer]?.name}'s turn`}</h2>
          )}
          <p>
            {typeof turnScore === "number"
              ? `Score this turn : ${turnScore}`
              : /PIG OUT/.test(turnScore)
              ? "PIG OUT!!!"
              : "MAKIN' BACON!!!"}
          </p>
        </div>
        <div id="totalsContainer">
          <h2>Total Scores</h2>
          {players.map((player) => {
            let total = 0;
            if (player.scores.length < 1) {
              total = 0;
            } else {
              total = player.scores.reduce((a, b) => {
                return a + b;
              });
            }

            return (
              <p key={player.name}>
                {player.name}'s score : {total}
              </p>
            );
          })}
        </div>
      </Carousel>
      <CurrentTurn
        currentPlayer={currentPlayer}
        turnScore={turnScore}
        players={players}
        setPlayers={setPlayers}
        winningScore={winningScore}
        setTurnScore={setTurnScore}
        setCurrentPlayer={setCurrentPlayer}
      />
    </>
  );
}

export default Play;
