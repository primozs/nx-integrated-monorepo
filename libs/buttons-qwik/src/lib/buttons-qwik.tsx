import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './buttons-qwik.css?inline';

export const ButtonsQwik = component$(() => {
  useStylesScoped$(styles);

  return <button>ButtonsQwik hello</button>;
});
