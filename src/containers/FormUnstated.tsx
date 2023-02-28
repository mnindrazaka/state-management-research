import React from "react";
import { Form } from "@/components";
import { useUnstatedForm } from "@/stores/unstated";

export type FormUnstatedProps = {};

export function FormUnstated() {
  const { name, setName } = useUnstatedForm();
  return <Form name={name} onChange={(name) => setName(name)} />;
}
