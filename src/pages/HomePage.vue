<script>
// COMPONENTS
import AppMain from "../components/AppMain.vue";


export default {
  name: 'home',
  // data() {
  //   return {
  //     title: "HomePage",
  //   };
  // },

  components: { AppMain, },
};
</script>

<template>
  <!-- <h1>{{ title }}</h1> -->
  <AppMain
    title="My Projects List" 
    class="my-4"/>
</template>

<style lang="scss" scoped></style>