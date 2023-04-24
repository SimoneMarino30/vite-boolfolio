<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      // title: "Hello world"
    }
  },

   props: {
    project: Object,
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <li>{{ project.title }}</li> 
</template>

<style lang="scss" scoped></style>