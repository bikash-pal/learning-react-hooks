import { useState } from "react";

interface Item {
  id: number;
  value: number;
}

export default function HookCounterFour() {
  const [items, setItem] = useState<Item[]>([]);

  const addItems = () => {
    setItem([
      ...items,
      {
        id: items.length + 1,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
      <button onClick={addItems}>Add to list</button>
    </>
  );
}
