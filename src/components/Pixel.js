import { useState } from "react";

export default function Pixel({ selectedColor }) {
  const [pixel, setPixel] = useState("");

  function handleMouseDown() {
    setPixel(selectedColor);
  }

  return (
    <div
      className="pixel"
      style={{ backgroundColor: pixel }}
      onMouseDown={handleMouseDown}
    ></div>
  );
}
