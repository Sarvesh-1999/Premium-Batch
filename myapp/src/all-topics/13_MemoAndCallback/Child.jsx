import React from "react";

const Child = () => {
  console.log("Child");
  return <h1>Child</h1>;
};

export default React.memo(Child);
