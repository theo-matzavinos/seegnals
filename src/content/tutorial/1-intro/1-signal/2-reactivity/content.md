---
type: lesson
title: Reactive node
slug: reactivity
template: 2-signal-reactivity
focus: /signal.ts
---

# Reactivity

What we have so far is just a container for a value.

What we're missing is a way to manage subscriptions to each signal.

## Some terminology

Let's call things that produce values `sources` and things that consume values `sinks`.

- A `signal` can _only_ be a `source`.
- A `computed` can be _both_ a `source` and a `sink`.
- An `effect` can _only_ be a `sink`.

## Dependency tracking and reactivity

- When a `sink` starts running its computation logic it adds a callback to a "global" `context` which will be used by its `source(s)` to notify the `sink` when there is a value change.
- After the `sink`'s computation is completed it should remove the callback from the `context`.
- When a `source`'s value is read it should `peek` the `context` and if there is an entry add the callback to its subscribers.
- When a `source`'s value changes it should notify its `sinks` using the callback (push model).
- When a `sink` that has been notified by one (or more) of its `source(s)` it should read the `source(s)` value(s) and re-run its computation logic (pull model).
