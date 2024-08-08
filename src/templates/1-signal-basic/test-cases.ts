import { signal } from "./signal";

export const testCases: TestCase[] = [
  {
    run: async () => {
      const value = signal(undefined);

      return value();
    },
    expected: undefined,
  },
  {
    run: async () => {
      const value = signal(5);

      return value();
    },
    expected: 5,
  },
  {
    run: async () => {
      const value = signal(5);

      value.set(undefined);

      return value();
    },
    expected: undefined,
  },
  {
    run: async () => {
      const value = signal<number | undefined>(undefined);

      value.set(5);

      return value();
    },
    expected: 5,
  },
];
