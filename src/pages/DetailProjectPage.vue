<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  name: 'detail',
  data() {
    return {
      title: "DetailProjectPage"
    }
  },

  // !  MI ARRIVA UN OGGETTO VUOTO(PROTOTYPE OBJECT)
  created() {
    console.log(this.$route.params);
  }
  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <h1>{{ title }}</h1>
</template>

<style lang="scss" scoped></style>