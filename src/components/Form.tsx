import React from "react";

export type FormProps = {
  name: string;
  onChange: (name: string) => void;
};

export function Form(props: FormProps) {
  return (
    <div>
      <input
        type="text"
        value={props.name}
        onChange={(event) => props.onChange(event.target.value)}
      />
    </div>
  );
}
