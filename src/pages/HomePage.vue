<script>
// AXIOS CALL
import axios from "axios";
// COMPONENTS
import AppMain from "../components/AppMain.vue";


export default {
  name: 'home',
  data() {
    return {
      title: "HomePage",
       projects: {
        list: [],
        paginations: [],
      },
    }
  },

  components: { AppMain, },

  emits: ['changePage'],

  
  methods: {
    fetchList(endpoint = null) {
      if(!endpoint) endpoint = 'http://127.0.0.1:8000/api/projects';
      axios.get(endpoint)
      // CIO' CHE VIENE LETTO DALL'API
      .then((response) => {
        this.projects.list = response.data.data;
        this.projects.paginations = response.data.links;
        // console.log(response.data);
      });
    },
  },

  created() {
    this.fetchList();
  },
};
</script>

<template>
  <h1>{{ title }}</h1>
  <AppMain :projects="projects.list" :paginations="projects.paginations"
    @changePage="fetchList" 
    title="My Projects List" 
    class="my-4"/>
</template>

<style lang="scss" scoped></style>