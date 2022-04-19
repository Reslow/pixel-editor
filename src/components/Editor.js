import { useState } from "react";
import { TwitterPicker } from "react-color";
import DrawingPanel from "./DrawingPanel";
//  här ska alla övriga komponeneter rendreras ut

export default function Editor() {
  const [selectedColor, setSelectedColor] = useState("");
  function handleTwitterPicker(e) {
    console.log(e.hex);
    setSelectedColor(e.hex);
  }
  console.log(selectedColor);
  return (
    <div>
      <TwitterPicker onChange={handleTwitterPicker} />
      <DrawingPanel />
      <h1 style={{ color: selectedColor }}>COLOR</h1>
    </div>
  );
}
