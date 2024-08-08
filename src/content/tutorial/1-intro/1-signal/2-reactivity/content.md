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

## Details, please?

- We added a "global" `context` array which we will use like a stack to keep track of which computeds/effects are currently runnning.
- Each signal must have its own `Set` of subscriptions.
- When a signal's value is read we must `peek` (get the last item) at the context stack and if there is an entry add the entry to the signal's subscribers.
- In the signal's setter we must call all of the signal's subscriptions.
