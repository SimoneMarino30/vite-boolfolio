<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  
  props: {
    title: String,
  },
  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
<nav class="navbar bg-body-tertiary">
  <div class="container">
    <span class="navbar-brand mb-0 h1">{{ title }}</span>
  </div>
</nav>
</template>

<style lang="scss" scoped></style>

