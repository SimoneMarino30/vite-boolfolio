<script>
// AXIOS CALL
import axios from "axios";

// COMPONENTS
import ProjectCard from "./ProjectCard.vue";
import AppPagination from "./AppPagination.vue";



export default {
  name: 'AppMain',

  data() {
    return {
      error: false,
      isLoading: false,
      projects: {
        list: [],
        paginations: [],
      },
    }
  },

  props: { title: String, },
  
  components: { ProjectCard, AppPagination,  },

  emits: ['changePage'],

  
  methods: {
    fetchList(endpoint = null) {
      this.isLoading = true;

      if(!endpoint) endpoint = 'http://127.0.0.1:8000/api/projects';

      axios
      .get(endpoint)
      // CIO' CHE VIENE LETTO DALL'API
      .then((response) => {
        this.projects.list = response.data.data;
        this.projects.paginations = response.data.links;
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
        this.error = err.message;
      })
      .finally(() => {
        this.isLoading = false;
      });
    },
  },

  created() {
    this.fetchList();
  },
};
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <AppLoader v-if="isLoading"/>
    <div class="d-flex flex-wrap" v-if="projects.list.length">
      <ProjectCard v-for="project in projects.list" :key="project.id" :project="project" class="m-3"/>
    </div>
    <h2 v-else class="text-muted">Non ci sono progetti da mostrare</h2>
    <AppPagination :paginations="projects.paginations" @changePage="fetchList" />
  </main>
</template>

<style lang="scss" scoped></style>