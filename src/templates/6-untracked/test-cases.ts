import { signal } from "./signal";
import { computed } from "./computed";
import { untracked } from "./untracked";

export const testCases: TestCase[] = [
  {
    run: () => {
      const source = signal(3);
      const value = computed(() => untracked(() => source() * 9));

      value();

      source.set(12);

      return value();
    },
    expected: 27,
  },
];
