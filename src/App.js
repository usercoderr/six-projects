import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <div className="app">
      <button onClick={handleClick} className="open-modal-window">Open Window</button>
      {open && (
        <div className="overlay">
          <div className="modal">sdsdsdssdd
          <div onClick={handleClick}>EXIT</div></div>
        </div>
      )}
    </div>
  );
}

export default App;
