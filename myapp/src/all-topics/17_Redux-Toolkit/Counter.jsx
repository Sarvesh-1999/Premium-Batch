import { useSelector, useDispatch } from "react-redux";
import { incre, decre, reset } from "./ReduxExample";

const Counter = () => {
  let count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={() => dispatch(incre(5))}>increment</button>
      <button onClick={() => dispatch(decre(2))}>decrement</button>
      <button onClick={() => dispatch(reset(0))}>reset</button>

    </div>
  );
};

export default Counter;
