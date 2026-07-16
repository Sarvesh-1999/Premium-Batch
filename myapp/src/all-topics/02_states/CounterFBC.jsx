import { useState } from "react";

const CounterFBC = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);

  return (
    <>
      <h1>Create a Counter App {count}</h1>
      <button onClick={increment}>increment</button>
    </>
  );
};
export default CounterFBC;
