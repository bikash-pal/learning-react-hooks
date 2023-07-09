import { useState } from "react";

export default function HookCounter() {
  const [count, setCount] = useState(0);
  function updateCount() {
    setCount(count + 1);
  }
  return (
    <>
      <button onClick={updateCount}>Count {count}</button>
    </>
  );
}
