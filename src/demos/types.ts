/** Builds a live demo inside `el` and returns a cleanup function (or nothing). */
export type DemoFn = (el: HTMLElement) => (() => void) | void;
