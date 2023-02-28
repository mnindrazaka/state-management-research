import {
  CounterContext,
  CounterJotai,
  CounterRecoil,
  CounterUnstated,
  CounterZustand,
  FormContext,
  FormJotai,
  FormRecoil,
  FormUnstated,
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

      <div>
        <p>Unstated :</p>
        <CounterUnstated />
        <FormUnstated />
      </div>
    </div>
  );
}
