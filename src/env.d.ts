/// <reference path="../.astro/types.d.ts" />
/// <reference types="@tutorialkit/astro/types" />
/// <reference types="astro/client" />

declare type TestCase = {
  run: () => Promise<unknown>;
  expected: unknown;
};
