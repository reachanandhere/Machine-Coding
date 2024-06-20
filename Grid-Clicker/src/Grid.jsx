import React, { useEffect, useRef, useState } from "react";

const Grid = ({ grid }) => {
  const flattedGrid = grid.flat(Infinity);
  const numsOfOne = flattedGrid.filter((num) => num == 1).length;
  const [gridState, setGridState] = useState(new Set());
  const timerRef = useRef(null);
  const [clearing, setClearing] = useState(false);

  const clearGrid = () => {
    const keys = Array.from(gridState.keys());

    const deleteKeys = () => {
      if (keys.length > 0) {
        const currentKey = keys.shift();
        setGridState((prev) => {
          const updatedGrid = new Set(prev);
          updatedGrid.delete(currentKey);
          return updatedGrid;
        });
        timerRef.current = setTimeout(deleteKeys, 500);
      } else {
        setClearing(false);
        clearTimeout(timerRef.current);
      }
    };

    deleteKeys();
  };

  useEffect(() => {
    console.log(gridState.size, numsOfOne);
    if (gridState.size == numsOfOne) {
      clearGrid();
      setClearing(true);
    }
  }, [gridState]);

  const handleBoxClick = (e) => {
    const index = e.target.getAttribute("data-index");
    const element = e.target.getAttribute("data-element");

    if (element == 0 || clearing) return;
    else {
      if (gridState.has(index)) return;

      setGridState((prev) => {
        prev.add(index);
        return new Set(prev);
      });
    }
  };

  return (
    <div className="box-container">
      {flattedGrid.map((row, index) => {
        return (
          <div
            key={`${row}-${index}`}
            className={`box ${row == 1 ? "visible" : "hidden"}  ${
              gridState?.has(index.toString()) ? "selected" : ""
            } `}
            data-index={index}
            data-element={row}
            onClick={handleBoxClick}
          ></div>
        );
      })}
    </div>
  );
};

export default Grid;
