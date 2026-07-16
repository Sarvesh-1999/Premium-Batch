const PropsChild = (props) => {
  console.log(props); 
  // {str:"HW" , obj:{ name:"John" } , arr:[10,20,30] , fn:f }

  let {str , obj:{name} , arr:[,,e1] , fn} = props
  
  return (
    <>
      <h1>Props Child Component</h1>
      <h2>{str} {name} {e1}</h2>
      <button onClick={fn}>click</button>
    </>
  );
};
export default PropsChild;
