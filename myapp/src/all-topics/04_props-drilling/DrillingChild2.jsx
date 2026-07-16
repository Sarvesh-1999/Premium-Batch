import React from "react";

const DrillingChild2 = (props) => {
    console.log(props); // {str : "hello world"}
    
  return (
    <div>
      <h1>DrillingChild2 {props.str} </h1>
    </div>
  );
};

export default DrillingChild2;
