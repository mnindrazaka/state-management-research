import { atom, useRecoilState } from "recoil";

const counterState = atom({
  key: "counterState",
  default: 0,
});

export const useRecoilCounterState = () => useRecoilState(counterState);

const formState = atom({
  key: "formState",
  default: { name: "" },
});

export const useRecoilFormState = () => useRecoilState(formState);
