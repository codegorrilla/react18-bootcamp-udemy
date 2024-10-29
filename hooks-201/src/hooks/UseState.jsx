import { useState } from "react";

export default function State() {
  const [count, setCount] = useState(0);

  const showCount = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  return (
    <>
      <h2>This is UseState hook</h2>
      <h3>{count}</h3>
      <button onClick={showCount}>+</button>
    </>
  );
}
