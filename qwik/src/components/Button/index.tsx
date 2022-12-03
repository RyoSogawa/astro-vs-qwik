import {
  component$,
  useStore,
  useClientEffect$,
  Slot,
  useMount$,
  useServerMount$,
  useClientMount$,
  useStyles$,
} from "@builder.io/qwik";
import style from "./style.css?inline";

type ButtonProps = {
  name: string;
};

const Button = component$(({ name }: ButtonProps) => {
  const store = useStore({ count: 0 });
  useStyles$(style);

  useMount$(() => {
    console.log("mount:" + name);
  });

  useServerMount$(() => {
    console.log("serverMount:" + name);
  });

  useClientMount$(() => {
    console.log("clientMount:" + name);
  });

  useClientEffect$(
    () => {
      console.log("clientEffect:visible:" + name);
    },
    {
      eagerness: "visible",
    }
  );

  useClientEffect$(
    () => {
      console.log("clientEffect:idle:" + name);
    },
    {
      eagerness: "idle",
    }
  );

  useClientEffect$(
    () => {
      console.log("clientEffect:load:" + name);
    },
    {
      eagerness: "load",
    }
  );

  return (
    <button type={"button"} class={"my-button"} onClick$={() => store.count++}>
      <Slot />
      <span>:{store.count}</span>
    </button>
  );
});

export default Button;
