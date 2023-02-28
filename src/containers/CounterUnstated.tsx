import React from "react";
import { Counter } from "@/components";
import { useUnstatedCounter } from "@/stores/unstated";

export type CounterUnstatedProps = {};

export function CounterUnstated() {
  const { counter, increment, decrement } = useUnstatedCounter();
  return (
    <Counter
      counter={counter}
      onPlusButtonClick={increment}
      onMinusButtonClick={decrement}
    />
  );
}
