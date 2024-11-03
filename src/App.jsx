import "./App.css";
import React, { useState } from "react";
import EnterPlayers from "./enterPlayers";
import Game from "./game";
import EndGame from "./endGame.jsx";

function App() {
  const [currPage, setCurrPage] = useState("enterPlayers");

  return (
    <>
      {currPage === "enterPlayers" && (
        <EnterPlayers changePage={() => setCurrPage("game")} />
      )}
      {currPage === "game" && (
        <Game changePage={() => setCurrPage("endGame")} />
      )}
      {currPage === "endGame" && (
        <EndGame changePage={() => setCurrPage("enterPlayers")} />
      )}
    </>
  );
}

export default App;
