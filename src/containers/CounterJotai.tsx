import React from "react";
import { Counter } from "@/components";
import { useJotaiCounterAtom } from "@/stores/jotai";

export type CounterJotaiProps = {};

export function CounterJotai() {
  const [counter, setCounter] = useJotaiCounterAtom();
  return (
    <Counter
      counter={counter}
      onPlusButtonClick={() => setCounter((prev) => prev + 1)}
      onMinusButtonClick={() => setCounter((prev) => prev - 1)}
    />
  );
}
