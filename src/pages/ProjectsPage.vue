<script>
// AXIOS CALL
import axios from "axios";

// COMPONENTS
import ProjectCard from "../components/ProjectCard.vue";
import AppSocialLinks from "../components/AppSocialLinks.vue";
import AppMailTo from "../components/AppMailTo.vue";
import AppPagination from "../components/AppPagination.vue";

export default {
  name: 'ProjectsPage',

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
  
  components: { ProjectCard, AppPagination, AppSocialLinks, AppMailTo },

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
       
        console.log(response.data.links);
        // console.log(this.projects);
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
  <section class="row">
    <AppSocialLinks/>
    <div class="col-10 projects-box">
      <h1>{{ title }}</h1>
      <AppLoader v-if="isLoading"/>
      <div v-if="error" class="alert alert-danger" role="alert">
        {{error}}
      </div>
      <div class="d-flex flex-wrap" v-else-if="projects.list.length">
        <ProjectCard v-for="project in projects.list" :key="project.id" :project="project" :isDetail="false" class="m-3"/>
      </div>
      <h2 v-else class="text-muted">Non ci sono progetti da mostrare</h2>
      <AppPagination :paginations="projects.paginations" @changePage="fetchList" />
    </div>
    <AppMailTo/>
  </section>
  
</template>

<style lang="scss" scoped>
section {
  // border: 2px solid yellowgreen;
  flex-direction: row;
  display: flex;

  .projects-box {
      // border: 2px solid yellow;
    display: flex;
    flex-direction: column;
    align-items: center;
    }
}  
</style>
    