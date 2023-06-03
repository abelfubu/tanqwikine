import {
  PropFunction,
  Slot,
  component$,
  useStylesScoped$,
} from "@builder.io/qwik";
import styles from "./button.scss?inline";

export interface ButtonProps {
  onClick$?: PropFunction<() => void>;
  disabled?: boolean;
  accent?: boolean;
  icon?: string;
}

export const Button = component$((props: ButtonProps) => {
  useStylesScoped$(styles);
  return (
    <button
      disabled={props.disabled}
      onClick$={props.onClick$}
      class={props.accent ? "accent" : ""}
    >
      {props.icon && (
        <span class="material-symbols-outlined">{props.icon}</span>
      )}
      <Slot />
    </button>
  );
});
