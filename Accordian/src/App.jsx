import { useState } from "react";
import data from "./utils/content";

import "./App.css";

function App() {
  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (id) => {
    setSelected(id === selected ? null : id);
  };

  const handleMultiSelection = (id) => {
    const copymulti = [...multiple];
    const current_id_cpy = copymulti.indexOf(id);
    if (current_id_cpy === -1) copymulti.push(id);
    else copymulti.splice(current_id_cpy, 1);
    setMultiple(copymulti);
  };
  console.log(multiple);

  return (
    <>
      <h1>Hello </h1>
      <button onClick={() => setMultiSelection(!multiSelection)}>
        Multiple Selection
      </button>
      <div>
        {data.map((dataItems) => (
          <div
            key={dataItems.id}
            onClick={() =>
              multiSelection
                ? handleMultiSelection(dataItems.id)
                : handleSingleSelection(dataItems.id)
            }
          >
            <h3>{dataItems.question}</h3>
            <span>+</span>
            <div>
              {multiSelection
                ? multiple.indexOf(dataItems.id) !== -1 && (
                    <div>{dataItems.answer}</div>
                  )
                : selected === dataItems.id && <div>{dataItems.answer}</div>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
