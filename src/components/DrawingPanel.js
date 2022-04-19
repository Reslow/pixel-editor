import Row from "./Row";
export default function DrawingPanel({ rows, cols, selectedColor }) {
  let rowNum = { rows };
  let newrows = [...Array(JSON.parse(rowNum.rows))].map((e, i) => (
    <Row key={i} cols={cols} selectedColor={selectedColor} />
  ));

  return <div className="drawContainer">{newrows}</div>;
}
