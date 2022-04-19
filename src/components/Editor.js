import { useState } from "react";
import { TwitterPicker } from "react-color";
import DrawingPanel from "./DrawingPanel";
//  här ska alla övriga komponeneter rendreras ut

export default function Editor({ rows, cols }) {
  const [selectedColor, setSelectedColor] = useState("");
  function handleTwitterPicker(e) {
    console.log(e.hex);
    setSelectedColor(e.hex);
  }
  console.log(selectedColor);
  return (
    <div className="container">
      <TwitterPicker onChange={handleTwitterPicker} />
      {selectedColor.length > 1 ? (
        <p style={{ color: selectedColor }}>selected color for your art</p>
      ) : (
        <p>select a color to start your artwork</p>
      )}
      <DrawingPanel rows={rows} cols={cols} selectedColor={selectedColor} />
    </div>
  );
}
