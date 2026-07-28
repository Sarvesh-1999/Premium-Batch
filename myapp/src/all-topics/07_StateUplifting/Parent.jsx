import React, { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

const Parent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Parent Component : State Uplifting Example</h1>
      <hr />
      <ChildA count={count} />
      <hr />
      <ChildB setCount={setCount} />
    </div>
  );
};

export default Parent;
