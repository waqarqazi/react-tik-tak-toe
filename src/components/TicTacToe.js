import { useState } from "react";
import "./TicTacToe.css";

function TicTacToe({ onGameEnd }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index: number) => {
    const newBoard = [...board];
    if (newBoard[index] || calculateWinner(newBoard)) return;

    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const winner = calculateWinner(newBoard);
    if (winner) {
      onGameEnd(winner);
    } else if (!newBoard.includes(null)) {
      onGameEnd("Draw");
    }
  };

  const calculateWinner = (board: string[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  return (
    <div className="tic-tac-toe">
      <div className="board">
        {board.map((cell, index) => (
          <button
            key={index}
            className="cell"
            onClick={() => handleClick(index)}
          >
            {cell}
          </button>
        ))}
      </div>
      <p className="next-player">Next player: {isXNext ? "X" : "O"}</p>
    </div>
  );
}

export default TicTacToe;
