import { context } from "./context";

export function effect(fn: () => void) {
  let nextRun: number | undefined;

  function markDirty() {
    clearTimeout(nextRun);
    nextRun = setTimeout(run, 0);
  }

  function run() {
    context.push(markDirty);
    fn();
    context.pop();
  }

  run();
}
