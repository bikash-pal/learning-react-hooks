import { useEffect, useState } from "react";

export default function IntervalHookCounter() {
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount((previousState) => previousState + 1);
  };
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  //this can be implemeted in this way also but what is the difference

  // const tick = () => {
  //   setCount(count + 1);
  // };
  // useEffect(() => {
  //   const interval = setInterval(tick, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [count]);

  return <>{count}</>;
}
