import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { ButtonsQwik } from './buttons-qwik';

test(`[ButtonsQwik Component]: Should render`, async () => {
  const { screen, render } = await createDOM();
  await render(<ButtonsQwik />);
  expect(screen.innerHTML).toContain('ButtonsQwik works!');
});
