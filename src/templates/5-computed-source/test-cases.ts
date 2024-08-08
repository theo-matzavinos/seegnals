import { signal } from "./signal";
import { computed } from "./computed";

export const testCases: TestCase[] = [
  {
    run: () => {
      const source = signal(0);
      const mid = computed(() => source() * 2);
      const value = computed(() => mid() * 2);

      return value();
    },
    expected: 0,
  },
  {
    run: () => {
      const source = signal(0);
      const mid = computed(() => source() * 2);
      const value = computed(() => mid() * 2);

      value();

      source.set(3);
      source.set(12);

      return value();
    },
    expected: 48,
  },
];
