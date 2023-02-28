import {
  CounterContext,
  CounterJotai,
  CounterRecoil,
  CounterZustand,
  FormContext,
  FormJotai,
  FormRecoil,
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

      <div>
        <p>Recoil :</p>
        <CounterRecoil />
        <FormRecoil />
      </div>

      <div>
        <p>Jotai :</p>
        <CounterJotai />
        <FormJotai />
      </div>
    </div>
  );
}
