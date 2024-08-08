---
type: lesson
title: Untracked
template: 6-untracked
focus: /untracked.ts
---

# I need some privacy

Reactive systems also provide a way to stop the automatic dependency tracking.

## GDPR compliance

Let's create a function called `untracked` which:

- Takes in a function as a parameter.
- Pushes `undefined` to the context stack. Doing this splits the dependency graph.
- Runs the function.
- Pops the `undefined` from the context stack.
- Returns the result of the function call.
