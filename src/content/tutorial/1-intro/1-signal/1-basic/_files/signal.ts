export interface WritableSignal<T> {
  (): T;
  set(value?: T): void;
}

export function signal<T>(initialValue: T): WritableSignal<T> {}
