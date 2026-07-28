import React from "react";

const Child = ({ demo }) => {
  return (
    <div>
      <p>Child</p>
      <button onClick={() => demo("Hii")}>
        send
      </button>
    </div>
  );
};

export default Child;
