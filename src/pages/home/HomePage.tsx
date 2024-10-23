// src/HomePage.tsx
import { useState } from "react";
import TicTacToe from "components/TicTacToe";
import Statistics from "components/Statistics";
import { logout } from "store/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [draws, setDraws] = useState(0);
  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    navigate("/login"); // Redirect to the login page
  };
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
      <button onClick={handleLogout}>Logout</button>
      <Statistics wins={wins} losses={losses} draws={draws} />
      <TicTacToe onGameEnd={handleGameEnd} />
    </div>
  );
}

export default HomePage;
