import { useContext } from "react";
import { storeRoom } from "./Context";

const Button = () => {
  let { str, obj, arr } = useContext(storeRoom);
  console.log(str);
  console.log(obj);
  console.log(arr);

  return <button>Login</button>;
};

export default Button;
