import Pixel from "./Pixel";
export default function Row({ cols, selectedColor }) {
  let colsnum = { cols };

  let amountofPixelInrows = [...Array(JSON.parse(colsnum.cols))].map((e, i) => (
    <Pixel key={i} selectedColor={selectedColor} />
  ));
  return <div className="displayrows">{amountofPixelInrows}</div>;
}
