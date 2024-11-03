import React from "react";

export default function PlayerBlock(props) {
  const player = props.player;

  return (
    <div>
      <h1>You’ve entered inGamePlayer</h1>
      <ol>
        <li>Name: {player.name}</li>
        <li>Steps: {player.currNumber}</li>
        <li>
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
        </li>
      </ol>
    </div>
  );
}

function addOne() {
  props.setPlayers((prev) => {
    return prev.map((z) =>
      z.name === props.player.name ? { ...z, currNumber: z.currNumber + 1 } : z
    );
  });
}

function removeOne() {
  props.setPlayers((prev) => {
    return prev.map((z) =>
      z.name === props.player.name ? { ...z, currNumber: z.currNumber - 1 } : z
    );
  });
}

function dubble() {
  props.setPlayers((prev) => {
    return prev.map((z) =>
      z.name === props.player.name ? { ...z, currNumber: z.currNumber * 2 } : z
    );
  });
}

function split() {
  props.setPlayers((prev) => {
    return prev.map((z) =>
      z.name === props.player.name ? { ...z, currNumber: z.currNumber / 2 } : z
    );
  });
}
