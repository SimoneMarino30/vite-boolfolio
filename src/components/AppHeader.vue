<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  name: 'header',
  
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
    <div>
      <router-link :to="{ name: 'home' }" class="nav-link">
        Homepage
      </router-link>
      <router-link :to="{ name: 'detail' }" class="nav-link">
        Detail
      </router-link>
    </div>
  </div>
</nav>
</template>

<style lang="scss" scoped></style>

