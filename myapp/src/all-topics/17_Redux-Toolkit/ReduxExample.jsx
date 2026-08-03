import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Counter from "./Counter";

//! STEP 2 : CREATE A SLICE AND EXPORT ALL ACTIONS
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    incre: (prevState, action) => {
      console.log(action);
      return prevState + action.payload;
    },
    decre: (prevState, action) => {
      console.log(action);
      return prevState > 0 ? prevState - action.payload : 0;
    },
    reset: (prevState, action) => {
      console.log(action);
      return action.payload;
    },
  },
});
export const { incre, decre, reset } = counterSlice.actions;

//! STEP 1 : CREATE A STORE
const myStore = configureStore({
  reducer: {
    count: counterSlice.reducer,
  },
});

const ReduxExample = () => {
  return (
    <div>
      <Provider store={myStore}>
        <Counter />
      </Provider>
    </div>
  );
};

export default ReduxExample;
