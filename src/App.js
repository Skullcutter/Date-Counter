import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);

  const handleRestart = () => {
    setCount(0);
    setSteps(1);
  };

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="7"
          value={steps}
          onChange={(e) => setSteps(Number(e.target.value))}
        />
        <span>Steps: {steps}</span>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - steps)}>-</button>
        <span>
          <input
            type="number"
            value={Math.abs(count)}
            onChange={(e) => setCount(Number(e.target.value))}
          />
        </span>
        <button onClick={() => setCount((c) => c + steps)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {count !== 0 || steps !== 1 ? (
        <div>
          <button onClick={handleRestart}>Restart</button>
        </div>
      ) : null}
    </div>
  );
}
