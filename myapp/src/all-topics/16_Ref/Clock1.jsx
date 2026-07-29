import React, { useEffect, useState } from "react";

const Clock1 = () => {
  console.log("clock1");

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let id = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h1>Clock {time.toLocaleTimeString()}</h1>
    </div>
  );
};

export default Clock1;
