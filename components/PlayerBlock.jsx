import React, { useState } from "react";

export default function PlayerBlock(props) {
  const player = props.player;
  const [currNumber, setCurrnumber] = useState(Math.floor(Math.random() * 99));
  const [steps, setSteps] = useState(0);
  const [succeeded, setSucceeded] = useState(false);

  function checkSucceeded(Number) {
    if (Number === 100) {
      setSucceeded(true);
      //save games ++ and update avg for name.
    }
  }
  function addOne() {
    setCurrnumber(currNumber + 1);
    setSteps(steps + 1);
    checkSucceeded(currNumber + 1);
  }

  function removeOne() {
    setCurrnumber(currNumber - 1);
    setSteps(steps + 1);
    checkSucceeded(currNumber - 1);
  }

  function dubble() {
    setCurrnumber(currNumber * 2);
    setSteps(steps + 1);
    checkSucceeded(currNumber * 2);
  }

  function split() {
    setCurrnumber(Math.floor(currNumber / 2));
    setSteps(steps + 1);
    checkSucceeded(currNumber / 2);
  }

  function startNewGame() {
    setSucceeded(false);
    setCurrnumber(Math.floor(Math.random() * 99));
    setSteps(0);
    //set succeed to false so new game starts.
  }

  function removePlayer() {
    alert("entered remove Player");
    //remove player from game.
  }

  function startPlayerGame() {
    return (
      <div>
        <h1>{player.name}</h1>
        <h3>Your Number: {currNumber}</h3>
        <h3>Steps: {steps}</h3>
        <h3>disabled: {player.disabled}</h3>
        <h3>
          <button
            className="action"
            onClick={() => {
              addOne();
            }}
          >
            +1
          </button>
          <button
            className="action"
            onClick={() => {
              removeOne();
            }}
          >
            -1
          </button>
          <button
            className="action"
            onClick={() => {
              dubble();
            }}
          >
            *2
          </button>
          <button
            className="action"
            onClick={() => {
              split();
            }}
          >
            /2
          </button>
        </h3>
      </div>
    );
  }
  if (!succeeded) {
    return startPlayerGame();
  } else {
    return (
      <div>
        <h3>Wow {player.name}</h3>
        <h3>You succeeded in {steps} steps</h3>
        <h3>How would you like to continue?</h3>
        <button onClick={startNewGame}>Play Again</button>
        <button onClick={removePlayer}>Quit</button>
      </div>
    );
  }
}
