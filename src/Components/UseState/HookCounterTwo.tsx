import { useState } from "react";

export default function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  return (
    <>
      Count:{count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((previousCount) => previousCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((previousCount) => previousCount - 1)}>
        Decrement
      </button>
    </>
  );
}
