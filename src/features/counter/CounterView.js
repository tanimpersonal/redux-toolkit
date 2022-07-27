import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./counterSlice";

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};

export default CounterView;
