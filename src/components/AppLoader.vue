<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  name: 'Apploader',

  data() {
    return {
      title: "Hello world"
    }
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <div class="layover">
    Loading
  </div>
</template>

<style lang="scss" scoped>
  .layover {
    position: fixed;
    z-index: 99;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
  }
</style>