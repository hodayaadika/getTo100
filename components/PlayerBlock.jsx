import React, { useState } from "react";

export default function PlayerBlock(props) {
  const player = props.player;
  const [currNumber, setCurrnumber] = useState(Math.floor(Math.random() * 99));
  const [steps, setSteps] = useState(0);
  const [succeeded, setSucceeded] = useState(false);

  function checkSucceeded(Number) {
    if (Number === 100) {
      setSucceeded(true);
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

  if (!succeeded) {
    return (
      <div>
        <h1>Player</h1>
        <h3>Your Number: {currNumber}</h3>
        <h3>Name: {player.name}</h3>
        <h3>Steps: {steps}</h3>
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
}
