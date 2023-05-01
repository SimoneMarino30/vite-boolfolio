<script>

// COMPONENTS
import AppHeader from "./components/AppHeader.vue";
import ContactsPage from './pages/ContactsPage.vue';


export default {
  data() {
    return {
      title: "Vue Boolfolio",
    }
  },

  components: { AppHeader, ContactsPage },
};
</script>

<template>
  <AppHeader :title="title"/>
  <div class="container-fluid">
    <router-view></router-view>
  </div>
  
</template>


<style lang="scss">
  body {
    font-family: 'League Spartan', sans-serif;
  }
</style>