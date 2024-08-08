---
type: lesson
title: Effect
template: 3-effect
focus: /effect.ts
---

# Let's see some reactions

In a reactive system we have sources (things that produce values) and sinks (things that consume values).

We can think of `signal`s as sources and `effect`s as sinks.

## What's in an effect?

- An effect takes in a function as a parameter.
- Before running the function we push the effect's `markDirty` function to the `context` stack.
- We then run the function so the reactive system can track its dependencies.
- We pop the effect's `markDirty` function from the `context` stack.

## How to react? (not the framework)

A simple/naive implementation would be to just run the provided function every time `markDirty` is called. This would be problematic if multiple of its dependencies get updated in a single task.

Effects are usually batched and scheduled by the frameworks. In Angular, for instance, effects are scheduled to run after change detection (true in v18, might change).

In our case we can get away with a simple debounce. We can use `setTimeout` + `clearTimeout`, `requestAnimationFrame` + `cancelAnimationFrame`, or `Promise.resolve.then` + `AbortSignal`. The first two options are simpler to use and the tests expect `setTimeout` to be used so let's go with that.
