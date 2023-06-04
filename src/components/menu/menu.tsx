import {
  $,
  Signal,
  Slot,
  component$,
  useStylesScoped$,
} from "@builder.io/qwik";

import styles from "./menu.scss?inline";

export interface MenuProps {
  open: Signal<boolean>;
}

export const Menu = component$((props: MenuProps) => {
  useStylesScoped$(styles);

  const closeMenu = $(() => {
    props.open.value = false;
  });

  return (
    <>
      <Slot name="trigger" />
      {props.open.value && (
        <>
          <div onClick$={closeMenu} class="backdrop"></div>
          <ul onClick$={(e) => e.stopPropagation()}>
            <Slot name="content" />
          </ul>
        </>
      )}
    </>
  );
});
