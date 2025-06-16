import { component$, Slot } from "@builder.io/qwik";
import { useI18n } from "~/context/i18n-context";

export const BaseButton = component$(
  (props: {
    onClick$?: any;
    name: string;
    class?: string;
    id?: string;
    data?: any;
  }) => {
    const { t } = useI18n();

    return (
      <button
        type="button"
        id={props?.id}
        data-dropdown-toggle={props?.data}
        class={[
          "h-[40px] cursor-pointer rounded px-3 py-2.5 text-sm font-medium text-neutral-800 transition-all duration-200 hover:bg-mc-accent active:scale-90",
          props.class,
        ]}
        onClick$={() => {
          if (props.onClick$) {
            props.onClick$();
          }
        }}
      >
        <div class="flex items-center justify-center">
          <Slot name="prefix" />
          <p>{t(props.name)}</p>
          <Slot name="suffix" />
        </div>
      </button>
    );
  }
);
