import React from "react";
import { Form } from "@/components";
import { useContext } from "@/stores/context";

export type FormContextProps = {};

export function FormContext() {
  const { name, setName } = useContext();
  return <Form name={name} onChange={(name) => setName(name)} />;
}
