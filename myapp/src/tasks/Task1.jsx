import { useState } from "react";

const Task1 = () => {
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    setTheme((prev) => {
      return prev === "light" ? "dark" : "light";
    });
  };

  return (
    <div
      style={{
        height: "50vh",
        color: theme === "light" ? "black" : "white",
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <button onClick={handleTheme}>
        {theme === "light" ? "Dark" : "Light"}
      </button>

      <h1>Task 1</h1>
    </div>
  );
};
export default Task1;
