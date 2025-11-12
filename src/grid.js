import React from "react";

export default function Grid({ grid, robot, side }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 80px)", gap: "10px" }}>
      {grid.map((row, y) =>
        row.map((cell, x) => {
          //const isRobotHere = robot.grid === side && robot.x === x && robot.y === y;
          let isRobotHere = false;

           isRobotHere =  robot.x === x && robot.y === y;

          return (
            <div
              key={`${x}-${y}-${side}`}
              style={{
                width: 80,
                height: 80,
                border: "2px solid #555",
                borderRadius: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: isRobotHere ? "#eee" : "#fafafa",
                position: "relative",
              }}
            >
              {cell ? (
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    backgroundColor: cell,
                  }}
                ></div>
              ) : null}

              {isRobotHere && (
                <span
                  style={{
                    position: "absolute",
                    top: 2,
                    right: 2,
                    fontSize: 10,
                    background: "#333",
                    color: "#fff",
                    borderRadius: 4,
                    padding: "2px 4px",
                  }}
                >
                  🤖
                </span>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}
