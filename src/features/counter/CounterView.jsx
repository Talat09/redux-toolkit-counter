import { useDispatch, useSelector } from "react-redux";
import { decrement, increaseByAmmount, increment, reset } from "./counterSlice";

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  console.log(count);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-16">
      <button
        className="bg-sky-800 text-white p-5 rounded-md text-xl"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <h2 className="text-4xl font-semibold">Counter: {count}</h2>
      <button
        className="bg-sky-800 text-white p-5 rounded-md text-xl"
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        className="bg-sky-800 text-white p-5 rounded-md text-xl"
        onClick={() => {
          dispatch(increaseByAmmount(5));
        }}
      >
        Increment By 5
      </button>
      <button
        className="bg-sky-800 text-white p-5 rounded-md text-xl"
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
