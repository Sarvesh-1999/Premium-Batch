import React from "react";
import DrillingChild2 from "./DrillingChild2";

const DrillingChild1 = (props) => {
    console.log(props); // {str : "Hello World"}
    
  return (
    <div>
      <h1>DrillingChild1</h1>


      <DrillingChild2 str={props.str}/>
    </div>
  );
};

export default DrillingChild1;
