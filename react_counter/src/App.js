import React, { useState, createContext, useContext } from "react";
import "./App.css";

const GridContext = createContext();

const Cell = ({ index }) => {
  const { grid, toggleCell } = useContext(GridContext);
  const isOn = grid[index];

  return (
    <div
      className="cell"
      style={{ backgroundColor: isOn ? "black" : "white" }}
      onClick={() => toggleCell(index)}
    ></div>
  );
};

const Grid = () => {
  const { grid } = useContext(GridContext);
  return (
    <div className="grid">
      {grid.map((_, index) => (
        <Cell key={index} index={index} />
      ))}
    </div>
  );
};

const App = () => {
  const [grid, setGrid] = useState([false, false, false, false]);
  
  const toggleCell = (index) => {
    const newGrid = [...grid];
    newGrid[index] = !newGrid[index];
    setGrid(newGrid);
  };

  return (
    <GridContext.Provider value={{ grid, toggleCell }}>
      <div className="app">
        <h1>Count: {grid.filter(Boolean).length}</h1>
        <Grid />
      </div>
    </GridContext.Provider>
  );
};

export default App;
