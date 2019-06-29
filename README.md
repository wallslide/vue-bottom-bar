# vue-bottom-bar

When we were creating a chat-like UI, having keeping a chat bar at the bottom of the screen was a surprisingly difficult problem. Especially when dealing with Safari on ios. @nagoos/vue-bottom-bar is a component that you can pass your own components into. The passed components will be kept glued to the bottom of the browser.

See codesandbox demo [here](https://codesandbox.io/s/vue-bottom-bar-tymwt)

In our demo, we demonstrate using a vuetify input component, which simulates text inputs that found at the bottom of popular messenger programs. However, almost any component should work.

### On Safari-IOS
On of the challenges we faced was how IOS frequently drew the keyboard or word-suggestions over content at the bottom of the screen. `vue-bottom-bar` has special css to prevent this use-case. This behavior is especially bad when using foriegn-input keyboards such as Japanese or Chinese.

## Installation

```cli
yarn add @nagoos/vue-bottom-bar
```

## Usage

1. Import the `BottomBar` component and the accompanying css.
2. Register the component by placing it in your single-file component's `components` section.
3. Wrap your own component(s) in `<BottomBar><BottomBar/>` tags
4. Your component(s) should be stuck to the bottom of the browser

```js

<template>
  <BottomBar>
    <v-textarea :rows="1" placeholder="input here..." hide-details solo append-outer-icon="send"/>
  </BottomBar>
</template>

<script>
import BottomBar from "@nagoos/vue-bottom-bar";
import "@nagoos/vue-bottom-bar/dist/vue-bottom-bar.css";

export default {
  name: "App",
  components: {
    BottomBar
  }
};
</script>
```

