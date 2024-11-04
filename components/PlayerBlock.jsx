import React, { useState } from "react";
import "../css/playerBlock.css";

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

  function startNewGame() {
    setSucceeded(false);
    setCurrnumber(Math.floor(Math.random() * 99));
    setSteps(0);
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

  function startPlayerGame() {
    return (
      <div className="playerItem">
        <h1>{player.name}</h1>
        <h3>Your Number: {currNumber}</h3>
        <h3>Steps: {steps}</h3>
        <h3>Pick your action:</h3>
        <h3>
          <button
            disabled={!props.isActive}
            className="action"
            onClick={() => {
              addOne();
              props.switchTurn();
            }}
          >
            +1
          </button>
          <button
            disabled={!props.isActive}
            className="action"
            onClick={() => {
              removeOne();
              props.switchTurn();
            }}
          >
            -1
          </button>
          <button
            disabled={!props.isActive}
            className="action"
            onClick={() => {
              dubble();
              props.switchTurn();
            }}
          >
            *2
          </button>
          <button
            disabled={!props.isActive}
            className="action"
            onClick={() => {
              split();
              props.switchTurn();
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
      <div className="playerItem">
        <h3>Wow {player.name}</h3>
        <h3>You succeeded in {steps} steps</h3>
        <h3>How would you like to continue?</h3>
        <button onClick={startNewGame} className="action">
          Play Again
        </button>
        <button onClick={props.removePlayer} className="action">
          Quit
        </button>
      </div>
    );
  }
}
