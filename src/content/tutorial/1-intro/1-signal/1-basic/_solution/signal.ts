export interface WritableSignal<T> {
  (): T;
  set(value?: T): void;
}

export function signal<T>(initialValue: T): WritableSignal<T> {
  let value = initialValue;

  function result() {
    return value;
  }

  result.set = function (v: T) {
    value = v;
  };

  return result;
}
