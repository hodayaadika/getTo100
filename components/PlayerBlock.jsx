import React from "react";

export default function PlayerBlock(props) {
  const player = props.player;

  return (
    <div>
      <h1>You’ve entered inGamePlayer</h1>

      <h3>Name: {player.name}</h3>
      <h3>Steps: {player.currNumber}</h3>
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

function addOne() {
  console.log("props.setPlayers: ", props.setPlayers);
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
