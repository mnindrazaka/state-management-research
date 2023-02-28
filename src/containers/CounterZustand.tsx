import React from "react";
import { Counter } from "@/components";
import { useCounterStore } from "@/stores/zustand";

export type CounterZustandProps = {};

export function CounterZustand() {
  const { counter, increment, decrement } = useCounterStore();
  return (
    <Counter
      counter={counter}
      onPlusButtonClick={increment}
      onMinusButtonClick={decrement}
    />
  );
}
