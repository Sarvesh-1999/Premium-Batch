import React, { useReducer } from "react";
let initialState = 0;

function reducerFunc(prevState, action) {
  switch (action) {
    case "increment":
      return prevState + 1;
    case "decrement":
      return prevState > 0 ? prevState - 1 : 0;
    case "reset":
      return 0;
  }
}

const Reducer = () => {
  const [count, dispatch] = useReducer(reducerFunc, initialState); // [ud,f]

  return (
    <div>
      <h1>Reducer Example {count}</h1>
      <button onClick={() => dispatch("increment")}>incre</button>
    </div>
  );
};

export default Reducer;
