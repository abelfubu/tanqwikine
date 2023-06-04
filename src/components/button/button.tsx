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
  img?: { src: string; alt: string; width: number; height: number };
}

export const Button = component$((props: ButtonProps) => {
  useStylesScoped$(styles);
  return (
    <button
      disabled={props.disabled}
      onClick$={props.onClick$}
      class={props.accent ? "accent" : ""}
    >
      {props.img && (
        <img
          src={props.img.src}
          alt={props.img.alt}
          width={props.img.width}
          height={props.img.height}
        />
      )}
      {props.icon && <span class="material-icons md-48">{props.icon}</span>}
      <Slot />
    </button>
  );
});
