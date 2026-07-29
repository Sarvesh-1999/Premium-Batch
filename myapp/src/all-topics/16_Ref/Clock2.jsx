import React, { useEffect, useRef } from "react";

const Clock2 = () => {
  console.log("Clock 2");

  const timeRef = useRef(null); // {current : null} || {current : <span></span>}

  useEffect(() => {
    const intervalId = setInterval(() => {
      timeRef.current.textContent = new Date().toLocaleTimeString();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>
        Clock2 <span ref={timeRef}></span>
      </h1>
    </div>
  );
};

export default Clock2;
