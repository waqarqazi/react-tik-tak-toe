import React from "react";

const Board = ({ board, onCellPress }) => {
  return (
    <div style={styles.board}>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} style={styles.row}>
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              style={styles.cell}
              onClick={() => onCellPress(rowIndex, colIndex)}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const styles = {
  board: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
  },
  row: {
    display: "flex",
  },
  cell: {
    width: "100px",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    fontSize: "24px",
    cursor: "pointer",
  },
};

export default Board;
