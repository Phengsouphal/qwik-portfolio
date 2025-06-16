import { component$, Slot } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div class="w-full h-full bg-black">
        <div class="w-full h-full flex flex-col justify-center items-center max-w-6xl mx-auto">
          <Slot></Slot>
        </div>
      </div>
    </>
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
