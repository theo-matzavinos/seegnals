---
type: lesson
title: Computed as a source
template: 5-computed-source
focus: /computed.ts
---

# Going back to the source

Since computeds can consume other computeds to produce a value it's obvious that a computed can be a source.
So let's implement that.

## The how

We obviously need to keep track of the subscriptions so let's add a `Set`.

If the computed is dirty:

- We must `peek` at the context stack and if there is an entry add the entry to the subscriptions.
- If the new value is different than the previous we call `markDirty` on all the subscriptions.
