import React, { useState, useMemo, useCallback } from "react";
import Child from "./Child";

const OptimizationExample = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  //   const multiply = () => {
  //     console.log("multiply");
  //     return add * 5;
  //   };

  //! returns memoized value
  const multiply = useMemo(() => {
    console.log("multiply");
    return add * 5;
  }, [add]);

  //   function greet(){
  //   console.log("Welcome");
  //   }

  //! returns memoized function
  const greet = useCallback(() => {
    console.log("Welcome");
  }, []);

  return (
    <div>
      <h1>OptimizationExample</h1>
      <h1>Add : {add}</h1>
      <button onClick={() => setAdd((prev) => prev + 1)}>incre</button>
      <hr />
      <h1>Minus : {minus}</h1>
      <button onClick={() => setMinus((prev) => prev - 1)}>decre</button>
      <hr />
      <h1>Multiply : {multiply}</h1>
      <hr />
      <Child data={greet} />
    </div>
  );
};

export default OptimizationExample;

/*
! useMemo
The useMemo hook is a built-in React tool that caches (memoizes) the result of a calculation between component re-renders. It optimizes performance by preventing expensive, heavy computations from running unnecessarily when unrelated state changes occur.

! useCallback
useCallback is a React Hook that caches (memoizes) a function definition between component re-renders. By default, React recreates every function inside a component on every single render. Wrapping a function in useCallback ensures that React retains the same function instance in memory, unless its underlying dependencies change.

*/
