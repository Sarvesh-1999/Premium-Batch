import { useState } from "react";

const Task2 = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => {
      return !prev;
    });
  };

  return (
    <>
      <button onClick={handleToggle}>toggle</button>
      {toggle && <h1>Hii Everyone</h1>}
    </>
  );
};
export default Task2;
