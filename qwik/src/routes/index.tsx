import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Button from "~/components/Button";

export default component$(() => {
  return (
    <div>
      <div class={"button-wrapper"}>
        <Button name={"first"}>Hello first!</Button>
      </div>
      <div className={"button-wrapper"}>
        <Button name={"second"}>Hello second!</Button>
      </div>
      <div className={"button-wrapper"}>
        <Button name={"third"}>Hello third!</Button>
      </div>
      <div className={"button-wrapper"}>
        <Button name={"4th"}>Hello 4th!</Button>
      </div>
      <div className={"button-wrapper"}>
        <Button name={"last"}>automatic lazy loading</Button>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
