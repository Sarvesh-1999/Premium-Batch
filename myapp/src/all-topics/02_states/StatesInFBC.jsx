// In React, state is a component's local memory that stores data that can change over time.
// Hook are special inbuilt-function in react

import { useState } from "react";

const StatesInFBC = () => {
  const [data, setData] = useState("Hii"); // [ud , f]

  const handleBtn = () => {
    setData("Byee")
  };

  return (
    <>
      <h1>Learn States in FBC {data}</h1>
      <button onClick={handleBtn}>click</button>
    </>
  );
};
export default StatesInFBC;
