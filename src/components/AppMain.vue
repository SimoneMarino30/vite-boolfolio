<script>
// AXIOS CALL
// import axios from "axios";

// // COMPONENTS
// import ProjectCard from "./ProjectCard.vue";
// import AppPagination from "./AppPagination.vue";
import ProjectsPage from "../pages/ProjectsPage.vue";



export default {
    name: "AppMain",
    components: { ProjectsPage }
};
</script>

<template>
  <!-- <main>
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
  </main> -->

  <ProjectsPage
    title="My Projects List" 
    class="my-4"/>
</template>

<style lang="scss" scoped></style>