import React from "react";
import Child from "./Child";

const Parent = () => {
    
  function demo(x) {
    // recieves data from child
    console.log(x);
  }

  return (
    <div>
      <h1>Callbacks Example</h1>
      <Child demo={demo} />
    </div>
  );
};

export default Parent;
