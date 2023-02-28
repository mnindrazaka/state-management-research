import { create } from "zustand";

type CounterState = {
  counter: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounterStore = create<CounterState>((set) => ({
  counter: 0,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  decrement: () => set((state) => ({ counter: state.counter - 1 })),
}));

type FormState = {
  name: string;
  setName: (name: string) => void;
};

export const useFormStore = create<FormState>((set) => ({
  name: "",
  setName: (name: string) => set(() => ({ name })),
}));
