import React from "react";

export type CounterProps = {
  counter: number;
  onPlusButtonClick: () => void;
  onMinusButtonClick: () => void;
};

export function Counter(props: CounterProps) {
  return (
    <div>
      <button onClick={props.onMinusButtonClick}>-</button>
      <span>{props.counter}</span>
      <button onClick={props.onPlusButtonClick}>+</button>
    </div>
  );
}
