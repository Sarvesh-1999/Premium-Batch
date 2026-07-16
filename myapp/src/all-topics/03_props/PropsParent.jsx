import PropsChild from "./PropsChild";
import PropsChild2 from "./PropsChild2";

const PropsParent = () => {
  let data1 = "Hello World";
  let data2 = { name: "John" };
  let data3 = [10, 20, 30];
  let data4 = () => console.log("Hiii");
  return (
    <>
      <h1>Learn Props in React</h1>
      <hr />
      {/* Sending Multiple props */}
      <PropsChild str={data1} obj={data2} arr={data3} fn={data4} />

      <hr />
      <PropsChild2 value={{ data1, data2, data3, data4 }} />
    </>
  );
};
export default PropsParent;
