<script>
// AXIOS CALL
import axios from "axios";
// COMPONENTS
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";


export default {
  data() {
    return {
      title: "Vue Boolfolio",
      projects: [],
    }
  },

  components: { AppHeader, AppMain },

  methods: {
    fetchList() {
      axios.get('http://127.0.0.1:8000/api/projects')
      // CIO' CHE VIENE LETTO DALL'API
      .then((response) => {
        this.projects = response.data;
      });
    },
  },

  created() {
    this.fetchList();
  }
};
</script>

<template>
  <AppHeader :title="title"/>
  <div class="container">
    <AppMain :projects="projects" title="My Projects List" class="my-4"/>
  </div>
 
</template>

<style lang="scss" scoped></style>