/* eslint-disable i18next/no-literal-string */

import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { counterActions } from 'entities/Counter/model/slice/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

/* eslint-disable react/button-has-type */
interface CounterProps {
  className?: string;
}

export const Counter = ({ className }: CounterProps) => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state: StateSchema) => state.counter);
  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <h1 data-testid="value-title">
        {counterValue.value}
      </h1>
      <button data-testid="increment-btn" onClick={increment}>increment</button>
      <button data-testid="decrement-btn" onClick={decrement}>decrement</button>
    </div>
  );
};
