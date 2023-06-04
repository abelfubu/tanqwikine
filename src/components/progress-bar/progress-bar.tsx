import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./progress-bar.scss?inline";

export const ProgressBar = component$((props: { loading: boolean }) => {
  useStylesScoped$(styles);

  return (
    <div class="progress-bar">
      <div class={["progress-bar-inner", props.loading ? "loading" : ""]}></div>
    </div>
  );
});
