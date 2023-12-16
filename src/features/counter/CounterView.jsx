import { useDispatch, useSelector } from "react-redux";
import { decrement, increaseByAmmount, increment, reset } from "./counterSlice";

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  console.log(count);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <h2>Counter:{count}</h2>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(increaseByAmmount(5));
        }}
      >
        Increment By 5
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default CounterView;
