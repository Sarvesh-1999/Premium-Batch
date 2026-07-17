import { createContext } from "react";
import Home from "./Home";

//! Step 1 :  create a context and export it
export const storeRoom = createContext();

//! Step 2 : provide a context
const Context = (props) => {
  let str = "Hii";
  let obj = { name: "John" };
  let arr = [10, 20];

  return (
    <storeRoom.Provider value={{ str, obj, arr }}>
      {props.children}
    </storeRoom.Provider>
  );
};

export default Context;
