import { context, type Subscription } from "./context";

export function signal<T>(initialValue: T) {
  let value = initialValue;
  const subscriptions = new Set<Subscription>();

  function result() {
    const consumer = context.at(-1);

    if (consumer) {
      subscriptions.add(consumer);
    }

    return value;
  }

  result.set = function (v: T) {
    value = v;

    for (const sub of subscriptions) {
      sub();
    }
  };

  return result;
}
