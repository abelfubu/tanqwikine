import {
  PropFunction,
  QwikMouseEvent,
  Slot,
  component$,
  useStylesScoped$,
} from "@builder.io/qwik";
import styles from "./link.scss?inline";

export interface LinkProps {
  href?: string;
  onClick$?: PropFunction<(event: QwikMouseEvent) => void>;
}

export const Link = component$((props: LinkProps) => {
  useStylesScoped$(styles);

  return (
    <a preventdefault:click onClick$={props.onClick$}>
      <Slot />
    </a>
  );
});
