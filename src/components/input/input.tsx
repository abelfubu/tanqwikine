import {
  PropFunction,
  QwikChangeEvent,
  component$,
  useStylesScoped$,
} from "@builder.io/qwik";
import styles from "./input.scss?inline";

export interface InputProps {
  name?: string;
  value?: string;
  type?: string;
  onChange$?: PropFunction<(event: QwikChangeEvent) => void>;
}

export const Input = component$(({ type = "text", ...props }: InputProps) => {
  useStylesScoped$(styles);

  return <input {...props} type={type} />;
});
