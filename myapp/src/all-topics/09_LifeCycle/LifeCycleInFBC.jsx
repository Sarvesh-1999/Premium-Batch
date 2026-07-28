import React, { useEffect, useState } from "react";

const LifeCycleInFBC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mounted");
    let id = setInterval(() => console.log("API Called"), 1000);

    // clean-up function
    return () => {
      console.log("Unmounted");
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    console.log("Updated");
  }, [count]);

  return (
    <div>
      <h1>LifeCycleInFBC {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>incre</button>
    </div>
  );
};

export default LifeCycleInFBC;
