import { signal } from "./signal";
import { computed } from "./computed";

export const testCases: TestCase[] = [
  {
    run: () => {
      const source = signal(0);
      const value = computed(() => source() * 2);

      return value();
    },
    expected: 0,
  },
  {
    run: () => {
      const source = signal(0);
      const value = computed(() => source() * 2);

      source.set(3);
      source.set(12);

      return value();
    },
    expected: 24,
  },
];
