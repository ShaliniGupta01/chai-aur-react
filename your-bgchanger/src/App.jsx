import React, { useState, useEffect } from "react";

function ColorBox() {
  const [color, setColor] = useState(() => {
    return localStorage.getItem("bgColor") || "olive";
  });

  useEffect(() => {
    localStorage.setItem("bgColor", color);
  }, [color]);

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",              // Full screen
        display: "flex",              // Use Flexbox
        flexDirection: "column",      // Stack vertically
        alignItems: "center",         // Center horizontally
        justifyContent: "center",     // Center vertically
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <h1>Background Color: {color}</h1>

      <div style={{ display: "flex", gap: "10px", marginTop: "20px", borderRadius:"9999px" }}>
        <button onClick={() => setColor("red")}>Red</button>
        <button onClick={() => setColor("blue")}>Blue</button>
        <button onClick={() => setColor("green")}>Green</button>
        <button onClick={() => setColor("pink")}>Pink</button>
        <button onClick={() => setColor("violet")}>Violet</button>
        <button onClick={() => setColor("orange")}>Orange</button>
      </div>
    </div>
  );
}

export default ColorBox;