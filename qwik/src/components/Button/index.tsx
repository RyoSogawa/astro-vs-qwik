import { component$, useStore, useClientEffect$, Slot } from "@builder.io/qwik";

const Button = component$(() => {
  const store = useStore({ count: 0 });

  useClientEffect$(() => {
    console.log("mounted");
  });

  return (
    <button type={"button"} onClick$={() => store.count++}>
      <Slot />
      <span>:{store.count}</span>
    </button>
  );
});

export default Button;
