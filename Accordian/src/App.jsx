import { useState } from "react";
import data from "./utils/content";

import "./App.css";

function App() {
  const [selected, setSelected] = useState(null);

  const handleClick = (id) => {
    setSelected(id === selected ? null : id);
  };
  return (
    <>
      <h1>Hello </h1>
      <div>
        {data.map((dataItems) => (
          <div key={dataItems.id} onClick={() => handleClick(dataItems.id)}>
            <h3>{dataItems.question}</h3>
            <span>+</span>
            <div>
              {selected === dataItems.id ? <div>{dataItems.answer}</div> : null}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
