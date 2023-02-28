import { atom, useAtom } from "jotai";

const counterAtom = atom(0);
export const useJotaiCounterAtom = () => useAtom(counterAtom);

const formAtom = atom({ name: "" });
export const useJotaiFormAtom = () => useAtom(formAtom);
