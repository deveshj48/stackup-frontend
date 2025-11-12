import React, { useEffect, useState } from "react";
import { getState, move, pickup, drop, reset, check } from "./api";
import Grid from "./grid";

export default function App() {
  const [state, setState] = useState(null);
  const refresh = async () => setState(await getState());

  useEffect(() => { refresh(); }, []);

  if (!state) return <p>Loading...</p>;

  const { robot, leftGrid, rightGrid } = state;

  let successMessage = "";

  const handleMove = async (direction) => {
    await move(direction);
    await refresh();
  };

  const handlePickup = async () => {
    await pickup();
    await refresh();
  };

  const handleDrop = async () => {
    await drop();
    await refresh();
  };

  const handleReset = async () => {
    await reset();
    await refresh();
  };

    const handleCheck = async () => {
    successMessage = await check();
    console.log(successMessage);
    await refresh();
  };

  return (
    <div style={{ padding: 30, textAlign: "center" }}>
      <h1>Stack Up</h1>

      <div style={{ display: "flex", justifyContent: "center", gap: 50, marginBottom: 30 }}>
        <div>
          <h3>Challenge</h3>
          <Grid grid={leftGrid} robot={robot} side="left" />
        </div>
        <div>
          <h3>Target</h3>
          <Grid
            grid={rightGrid} robot={robot} side="right"
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 10 }}>
          <button onClick={() => handleMove("up")}>⬆️</button>
        </div>
        <div>
          <button onClick={() => handleMove("left")}>⬅️</button>
          <button onClick={() => handleMove("down")}>⬇️</button>
          <button onClick={() => handleMove("right")}>➡️</button>
        </div>
      </div>

      <div style={{ marginTop: 20 }}>
        <button onClick={handlePickup}>🎯 Pick Up</button>
        <button onClick={handleDrop}>📦 Drop</button>
        <button onClick={handleReset} style={{ marginLeft: 20, backgroundColor: "#f66", color: "white" }}>
          🔄 Reset
        </button>
      </div>

      <p style={{ marginTop: 20 }}>
        Holding: <strong>{robot.holding || "Nothing"}</strong>
      </p>

      <div style={{ marginBottom: 10 }}>
          <button onClick={() => handleCheck("check")}>CHECK SOLUTION</button>
      </div>

      <p style={{ marginTop: 20 }}>
        Result: <strong>{successMessage}</strong>
      </p>

    </div>


  );
}
