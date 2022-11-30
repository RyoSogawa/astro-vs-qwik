import {
  component$,
  useStore,
  useClientEffect$,
  Slot,
  useMount$,
  useServerMount$,
  useClientMount$,
} from "@builder.io/qwik";

type ButtonProps = {
  name: string;
};

const Button = component$(({ name }: ButtonProps) => {
  const store = useStore({ count: 0 });

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
    <button type={"button"} onClick$={() => store.count++}>
      <Slot />
      <span>:{store.count}</span>
    </button>
  );
});

export default Button;
