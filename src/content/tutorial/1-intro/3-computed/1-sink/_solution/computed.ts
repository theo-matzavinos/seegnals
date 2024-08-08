import { context } from "./context";

export function computed<T>(fn: () => T) {
  let dirty = true;
  let value: T;

  function markDirty() {
    dirty = true;
  }

  return () => {
    if (!dirty) {
      return value;
    }

    context.push(markDirty);
    value = fn();
    context.pop();
    dirty = false;

    return value;
  };
}
