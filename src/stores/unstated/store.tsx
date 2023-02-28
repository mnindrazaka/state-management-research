import React from "react";
import { createContainer } from "unstated-next";

const useCounter = () => {
  const [counter, setCounter] = React.useState(0);
  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);
  return { counter, increment, decrement };
};

export const UnstatedCounter = createContainer(useCounter);

export const useUnstatedCounter = () => UnstatedCounter.useContainer();

const useForm = () => {
  const [name, setName] = React.useState("");
  return { name, setName };
};

export const UnstatedForm = createContainer(useForm);

export const useUnstatedForm = () => UnstatedForm.useContainer();
