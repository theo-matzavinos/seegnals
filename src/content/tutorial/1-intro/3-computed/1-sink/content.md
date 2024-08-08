---
type: lesson
title: Computed as a sink
template: 4-computed-sink
focus: /computed.ts
---

# Does not compute

A `computed` is both a `sink` and a `source` since it consumes other signals/computed to produce a value.

## Coming down with the consumption

Let's start by implementing the sink part of a `computed`.

We need a function that:

- Receives a function as a parameter which produces a value.
- Returns a getter function.
- When the getter is called:
  - If the computed is marked dirty:
    - Push the computed's details (dependencies, markDirty) to the `context` stack.
    - Run the producer function and "cache" the result.
    - Pop the computed's details (dependencies, markDirty) to the `context` stack.
    - Mark the computed as pristine.
    - Return the produced value.
  - If the computed is not marked dirty return the "cached" value.
