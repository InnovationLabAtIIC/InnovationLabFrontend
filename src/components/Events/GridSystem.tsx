"use client";

import { useEffect, useMemo, useState } from "react";

const TOTAL_COLUMNS = 16;

export default function GridSystem({
  rows = 4,
  cells = [],
}: {
  rows: number;
  cells: { row: number; col: number; color: string }[];
}) {
  const [cellSize, setCellSize] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      setCellSize(width / TOTAL_COLUMNS);
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const cellMap = useMemo(() => {
    const map = new Map();

    cells.forEach(({ row, col, color }) => {
      map.set(`${row}-${col}`, color);
    });

    return map;
  }, [cells]);

  const grid = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < TOTAL_COLUMNS; col++) {
      const key = `${row}-${col}`;
      const color = cellMap.get(key);

      grid.push(
        <div
          key={key}
          style={{
            width: cellSize,
            height: cellSize,
            backgroundColor: color || "transparent",
            boxSizing: "border-box",
          }}
        />,
      );
    }
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${TOTAL_COLUMNS}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
      }}
    >
      {grid}
    </div>
  );
}
