// src/HomePage.tsx
import { useState } from "react";
import TicTacToe from "components/TicTacToe";
import Statistics from "components/Statistics";

function HomePage() {
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [draws, setDraws] = useState(0);

  // Define the type of 'result' as 'X' | 'O' | 'Draw'
  const handleGameEnd = (result: "X" | "O" | "Draw") => {
    if (result === "X") {
      setWins(wins + 1);
    } else if (result === "O") {
      setLosses(losses + 1);
    } else if (result === "Draw") {
      setDraws(draws + 1);
    }
  };

  return (
    <div className="HomePage">
      <h1>Tic-Tac-Toe Game</h1>
      <Statistics wins={wins} losses={losses} draws={draws} />
      <TicTacToe onGameEnd={handleGameEnd} />
    </div>
  );
}

export default HomePage;
