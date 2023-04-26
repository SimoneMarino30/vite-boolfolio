<script>

// COMPONENTS
import AppHeader from "./components/AppHeader.vue";


export default {
  data() {
    return {
      title: "Vue Boolfolio",
    }
  },

  components: { AppHeader },
};
</script>

<template>
  <AppHeader :title="title"/>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style lang="scss"></style>