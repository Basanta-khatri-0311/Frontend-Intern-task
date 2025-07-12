import React, { useState } from "react";

const CELL_SIZE = 40;
const GRID_ROWS = 15;
const GRID_COLS = 30;
const SQUARES_PER_CLICK = 10;
const SQUARE_COLOR = "#6b21a8";

function VideoTask() {
  // colored cells as a set of 'row-col' keys to avoid duplicates
  const [coloredCells, setColoredCells] = useState(new Set());

 const handleClick = () => {
  const newCells = new Set();
  let attempts = 0;

  while (newCells.size < SQUARES_PER_CLICK && attempts < 100) {
    const randomRow = Math.floor(Math.random() * GRID_ROWS);
    const randomCol = Math.floor(Math.random() * GRID_COLS);
    newCells.add(`${randomRow}-${randomCol}`);
    attempts++;
  }

  setColoredCells(newCells);
};


  //  grid cells
  const cells = [];
  for (let row = 0; row < GRID_ROWS; row++) {
    for (let col = 0; col < GRID_COLS; col++) {
      const key = `${row}-${col}`;
      const isColored = coloredCells.has(key);
      cells.push(
        <div
          key={key}
          style={{
            width: CELL_SIZE,
            height: CELL_SIZE,
            border: "1px solid #c0c0c0",
            backgroundColor: isColored ? SQUARE_COLOR : "transparent",
          }}
        />
      );
    }
  }

  return (
    <div
      style={{
        width: CELL_SIZE * GRID_COLS,
      }}
      onClick={handleClick}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${GRID_COLS}, ${CELL_SIZE}px)`,
          gridTemplateRows: `repeat(${GRID_ROWS}, ${CELL_SIZE}px)`,
        }}
      >
        {cells}
      </div>
    </div>
  );
}

export default VideoTask;
