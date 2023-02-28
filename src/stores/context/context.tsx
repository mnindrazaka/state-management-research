import React from "react";

export type ContextValue = {
  counter: number;
  setCounter: (counter: number) => void;
  name: string;
  setName: (name: string) => void;
};

const Context = React.createContext<ContextValue>({
  counter: 0,
  setCounter: () => {},
  name: "",
  setName: () => {},
});

export const useContext = () => React.useContext(Context);

type ContextProviderProps = { children: React.ReactNode };

export const ContextProvider = (props: ContextProviderProps) => {
  const [counter, setCounter] = React.useState(0);
  const [name, setName] = React.useState("");
  return (
    <Context.Provider value={{ counter, setCounter, name, setName }}>
      {props.children}
    </Context.Provider>
  );
};
