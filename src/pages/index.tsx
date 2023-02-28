import {
  CounterContext,
  CounterRecoil,
  CounterZustand,
  FormContext,
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
    </div>
  );
}
