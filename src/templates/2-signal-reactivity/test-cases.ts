import { context } from "./context";
import { signal } from "./signal";

export const testCases: TestCase[] = [
  {
    run: async () => {
      const value = signal(undefined);
      let dirty = false;

      context.push(() => {
        dirty = true;
      });

      value();

      return dirty;
    },
    expected: false,
  },
  {
    run: async () => {
      const value = signal<number | undefined>(undefined);
      let dirty = false;

      context.push(() => {
        dirty = true;
      });

      value();
      value.set(5);

      return dirty;
    },
    expected: true,
  },
];
