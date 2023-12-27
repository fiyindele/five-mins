import React, { useState } from "react";

const ColorPicker = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const handleChange = (event, color) => {
    const value = event.target.value;
    switch (color) {
      case "red":
        setRed(value);
        break;
      case "green":
        setGreen(value);
        break;
      case "blue":
        setBlue(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div>
        <label>Red:</label>
        <input
          type="range"
          min="0"
          max="255"
          value={red}
          onChange={(e) => handleChange(e, "red")}
        />
        {red}
      </div>
      <div>
        <label>Green:</label>
        <input
          type="range"
          min="0"
          max="255"
          value={green}
          onChange={(e) => handleChange(e, "green")}
        />
        {green}
      </div>
      <div>
        <label>Blue:</label>
        <input
          type="range"
          min="0"
          max="255"
          value={blue}
          onChange={(e) => handleChange(e, "blue")}
        />
        {blue}
      </div>
      <div style={{ margin: "50px" }}></div>
      <div
        style={{
          width: "700px",
          height: "100px",
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></div>
    </div>
  );
};

export default ColorPicker;
