---
type: lesson
title: Basic signal
slug: basic
template: 1-signal-basic
focus: /signal.ts
---

# What's in a signal?

A signal is, at its core, a [closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) over a value - a container that holds a value.

You can think of it as a class with a private property and a getter method that returns its value.

A signal also needs a setter function/method to be useful.

## API designs in the wild

- Solid.js and Preact signals return a tuple with the getter and the setter.
- Vue.js refs (aka signals) and Qwik signals have a `value` property which is used to read and write their value.
- Angular signals return a getter function that also has a `set` method.
- Svelte runes (aka signals) are mainly a compile-time abstraction and are used as if they were primitive values.

## So, now what?

Since we're Angular Developers™ we're going with their API as a basis.

So let's create a function called `signal` which takes in an initial value and returns a getter function which also has a setter method called `set`.
