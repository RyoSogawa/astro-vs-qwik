import { component$, Resource, useResource$, useStore } from "@builder.io/qwik";

export default component$(() => {
  const store = useStore<{ name?: string }>({
    name: undefined,
  });

  const ageResource = useResource$<{
    name: string;
    age: number;
    count: number;
  }>(async ({ track, cleanup }) => {
    track(() => store.name);
    const abortController = new AbortController();
    cleanup(() => abortController.abort("cleanup"));
    const res = await fetch(`https://api.agify.io?name=${store.name}`, {
      signal: abortController.signal,
    });
    return res.json();
  });

  return (
    <div>
      <h1>Enter your name, and I'll guess your age!</h1>
      <input
        onInput$={(e: Event) =>
          (store.name = (e.target as HTMLInputElement).value)
        }
      />
      <Resource
        value={ageResource}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Failed to person data</div>}
        onResolved={(ageGuess) => {
          return (
            <div>
              {store.name && (
                <>
                  {ageGuess.name} {ageGuess.age} years
                </>
              )}
            </div>
          );
        }}
      />
    </div>
  );
});
