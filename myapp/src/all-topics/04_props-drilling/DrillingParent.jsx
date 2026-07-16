import React from "react";
import DrillingChild1 from "./DrillingChild1";

const DrillingParent = () => {
  let data1 = "Hello World";
  let data2 = { fname: "John", lname: "Doe" };

  return (
    <div>
      <h1>DrillingParent</h1>

      <DrillingChild1 str={data1} />
    </div>
  );
};

export default DrillingParent;
