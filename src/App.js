import "./App.css";
import { useState } from "react";
import Editor from "./components/Editor";

function App() {
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [displayEditor, setDisplayEditor] = useState(false);

  function handleChangeCol(e) {
    setCols(e.target.value);
  }

  function handleChangeRow(e) {
    setRows(e.target.value);
  }

  function handleClick() {
    if (rows !== 0 && cols !== 0) {
      setDisplayEditor(true);
    }
  }

  return (
    <div className="App">
      <header className="header">
        <h1>pixel-editor</h1>
      </header>
      {!displayEditor ? (
        <form className="setDrawBoard--form">
          <input
            type="Number"
            placeholder="number of columns"
            name="columns"
            onChange={handleChangeCol}
          />
          <input
            type="Number"
            placeholder="number of rows"
            name="rows"
            onChange={handleChangeRow}
          />
          <button onClick={handleClick} type="button">
            Börja rita
          </button>
        </form>
      ) : (
        <Editor rows={rows} cols={cols} />
      )}
    </div>
  );
}

export default App;
