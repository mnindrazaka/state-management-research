import React from "react";
import { Counter } from "@/components";
import { useContext } from "@/stores/context";

export type CounterContextProps = {};

export function CounterContext() {
  const { counter, setCounter } = useContext();
  return (
    <Counter
      counter={counter}
      onPlusButtonClick={() => setCounter(counter + 1)}
      onMinusButtonClick={() => setCounter(counter - 1)}
    />
  );
}
