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
      projects: {
        list: [],
        paginations: [],
      },
      
    }
  },

  components: { AppHeader, AppMain },

  emits: ['changePage'],

  methods: {
    fetchList(endpoint = null) {
      if(!endpoint) endpoint = 'http://127.0.0.1:8000/api/projects';
      axios.get(endpoint)
      // CIO' CHE VIENE LETTO DALL'API
      .then((response) => {
        this.projects.list = response.data.data;
        this.projects.paginations = response.data.links;
      });
    },
  },

  created() {
    this.fetchList();
  },
};
</script>

<template>
  <AppHeader :title="title"/>
  <div class="container">
    <AppMain :projects="projects.list" :paginations="projects.paginations"
    @changePage="fetchList" 
    title="My Projects List" 
    class="my-4"/>
  </div>
 
</template>

<style lang="scss" scoped></style>