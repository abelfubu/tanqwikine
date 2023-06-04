import {
  $,
  PropFunction,
  Signal,
  Slot,
  component$,
  useStylesScoped$,
} from "@builder.io/qwik";

import styles from "./dialog.scss?inline";

export interface DialogProps {
  open: Signal<boolean>;
  onClose?: PropFunction<() => void>;
  closeOnBackdropClick?: boolean;
}

export const Dialog = component$((props: DialogProps) => {
  useStylesScoped$(styles);

  const closeDialog = $((withConfig: boolean) => {
    if (withConfig && !props.closeOnBackdropClick) return;

    props.open.value = false;
  });

  return (
    <>
      <Slot name="trigger" />
      {props.open.value && (
        <div onClick$={() => closeDialog(true)} class="backdrop">
          <dialog open={true} onClick$={(e) => e.stopPropagation()}>
            <span class="material-icons" onClick$={() => closeDialog(false)}>
              close
            </span>
            <Slot name="content" />
          </dialog>
        </div>
      )}
    </>
  );
});
