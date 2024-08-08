import { context, type Subscription } from "./context";

export function computed<T>(fn: () => T) {
  let dirty = true;
  let value: T;
  const subscriptions = new Set<Subscription>();

  function markDirty() {
    dirty = true;
    for (const sub of subscriptions) {
      sub();
    }
  }

  return () => {
    if (!dirty) {
      return value;
    }

    const consumer = context.at(-1);

    if (consumer) {
      subscriptions.add(consumer);
    }

    context.push(markDirty);
    value = fn();
    context.pop();
    dirty = false;
    return value;
  };
}
