import { useCallback, useState } from "react";
import Button from "react-bootstrap/Button";

function App() {
  let [color, setColor] = useState("olive");

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vw",
          backgroundColor: color,
          padding: "5rem",
        }}
      >
        <Button variant="outline-primary" onClick={() => setColor("blue")}>
          Primary
        </Button>
        <Button variant="outline-secondary" onClick={() => setColor("grey")}>
          Secondary
        </Button>
        <Button variant="outline-success" onClick={() => setColor("green")}>
          Success
        </Button>
        <Button variant="outline-warning" onClick={() => setColor("yellow")}>
          Warning
        </Button>
        <Button variant="outline-danger" onClick={() => setColor("red")}>
          Danger
        </Button>
        <Button variant="outline-info" onClick={() => setColor("skyBlue")}>
          Info
        </Button>
        <Button variant="outline-dark" onClick={() => setColor("black")}>
          Dark
        </Button>
      </div>
    </>
  );
}

export default App;
