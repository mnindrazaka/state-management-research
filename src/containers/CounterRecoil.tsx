import React from "react";
import { Counter } from "@/components";
import { useRecoilCounterState } from "@/stores/recoil";

export type CounterRecoilProps = {};

export function CounterRecoil() {
  const [counter, setCounter] = useRecoilCounterState();
  return (
    <Counter
      counter={counter}
      onPlusButtonClick={() => setCounter((prev) => prev + 1)}
      onMinusButtonClick={() => setCounter((prev) => prev - 1)}
    />
  );
}
