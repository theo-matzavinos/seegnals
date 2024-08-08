import { context } from "./context";

export function untracked<T>(fn: () => T) {
  context.push(undefined);
  const result = fn();
  context.pop();

  return result;
}
