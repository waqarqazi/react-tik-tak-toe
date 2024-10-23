import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startGame, makeMove, getProfile } from "../../store/gameSlice"; // Import the game slice actions
import { logout } from "../../store/authSlice";
import Board from "./Board";

const GameScreen = () => {
  const dispatch = useDispatch();
  const {
    board,
    currentPlayer,
    winner,
    email,
    firstName,
    lastName,
    wins,
    loses,
    draws,
  } = useSelector((state) => state.game);

  useEffect(() => {
    dispatch(getProfile());
    dispatch(startGame());
  }, [dispatch]);

  const handleMove = (row, col) => {
    if (board[row][col] !== "") {
      alert("Invalid Move, cell already occupied.");
      return;
    }
    dispatch(makeMove({ row, col, player: currentPlayer }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={styles.container}>
      <h1>Tic Tac Toe</h1>

      <p>
        Player: {firstName} {lastName} ({email})
      </p>

      <Board board={board} onCellPress={handleMove} />

      <div style={styles.buttonContainer}>
        <button onClick={() => dispatch(startGame())}>Restart Game</button>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <div style={styles.statsContainer}>
        <div style={styles.card}>
          <h3>Wins</h3>
          <p>{wins}</p>
        </div>
        <div style={styles.card}>
          <h3>Losses</h3>
          <p>{loses}</p>
        </div>
        <div style={styles.card}>
          <h3>Draws</h3>
          <p>{draws}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
  },
  buttonContainer: {
    margin: "20px 0",
  },
  statsContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  card: {
    border: "1px solid lightgray",
    padding: "20px",
    margin: "0 10px",
    borderRadius: "5px",
  },
};

export default GameScreen;
