import { signal } from "./signal";
import { effect } from "./effect";

function sync() {
  return new Promise((resolve) => setTimeout(resolve));
}

export const testCases: TestCase[] = [
  {
    run: async () => {
      const source = signal("yolo");
      let value;

      effect(() => {
        value = source();
      });

      return value;
    },
    expected: "yolo",
  },
  {
    run: async () => {
      const source = signal(undefined);
      let value;

      effect(() => {
        value = source();
      });

      source.set("yolo");

      return value;
    },
    expected: undefined,
  },
  {
    run: async () => {
      const source = signal(undefined);
      let value;

      effect(() => {
        value = source();
      });

      source.set("yolo");

      await sync();

      return value;
    },
    expected: "yolo",
  },
];
