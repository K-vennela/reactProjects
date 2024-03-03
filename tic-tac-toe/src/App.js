import { useState } from "react";

function Square({ value, handleSquareClick }) {
  function handleClick() {
    console.log("sqaure clicked");
  }

  return (
    <button className="square" onClick={handleSquareClick}>
      {value}
    </button>
  );
}

export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if (squares[i] !== null || calculateWinner(squares) !== null) {
      return;
    }
    const newSquares = squares.slice();
    xIsNext ? (newSquares[i] = "X") : (newSquares[i] = "O");
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner === "X" || winner === "O") {
    status = "Winner: " + winner;
  } else if (winner === "Draw") {
    status = "Draw";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function calculateWinner(squares) {
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

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return squares[a];
      }
    }

    if (!squares.includes(null)) {
      return "Draw";
    }
    return null;
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} handleSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} handleSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} handleSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} handleSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} handleSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} handleSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} handleSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} handleSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} handleSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}
