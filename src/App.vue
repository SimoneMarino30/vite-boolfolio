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
  <AppHeader :title="title" />
  <div class="container">
    <router-view></router-view>
  </div>
</template>


<style lang="scss">
body {
  font-family: 'Farro', sans-serif;
  color: #8892b0;
}
</style>

