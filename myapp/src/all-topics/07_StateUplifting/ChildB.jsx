import React from "react";

const ChildB = ({ setCount }) => {
  return (
    <div>
      ChildB
      <button onClick={() => setCount((prev) => prev + 1)}>
        increment
      </button>
    </div>
  );
};

export default ChildB;
