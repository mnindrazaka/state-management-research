import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});

export const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
  },
  reducers: {
    update_name: (state, action) => {
      state.name = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    form: formSlice.reducer,
  },
});

export type ReduxProviderProps = {
  children: React.ReactNode;
};

export const ReduxProvider = (props: ReduxProviderProps) => {
  return <Provider store={store}>{props.children}</Provider>;
};
