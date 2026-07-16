const PropsChild2 = (props) => {
  console.log(props);
  // {value : {data1 : "" , data2: {} , data3: [] , data4:f}}

  let { data1, data2, data3, data4 } = props.value;

  return (
    <div>
      <h1>PropsChild2</h1>
      <h2>{data1}</h2>
      <h2>{data2.name}</h2>
      <h2>{data3}</h2>
      <button onClick={data4}>click</button>
    </div>
  );
};

export default PropsChild2;
