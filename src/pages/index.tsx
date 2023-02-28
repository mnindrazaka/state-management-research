import {
  CounterContext,
  CounterZustand,
  FormContext,
  FormZustand,
} from "@/containers";

export default function Home() {
  return (
    <div>
      <div>
        <p>Context :</p>
        <CounterContext />
        <FormContext />
      </div>

      <div>
        <p>Zuztand :</p>
        <CounterZustand />
        <FormZustand />
      </div>
    </div>
  );
}
