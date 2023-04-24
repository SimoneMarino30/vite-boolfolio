<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  data() {
    return {
      // title: "Hello world"
    }
  },

   props: {
    projects: Array,
    title: String,
    paginations: Array,
  },
  
  components: { ProjectCard },
};
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <div class="d-flex flex-wrap" v-if="projects.length">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" class="m-3"/>
    </div>
    <h2 v-else class="text-muted">Non ci sono progetti da mostrare</h2>
    <!-- PAGINATION -->
    <nav aria-label="Project-pagination">
      <ul class="pagination">
        <li v-for="pagination in paginations" class="page-item">
          <a class="page-link" href="#" v-html="pagination.label" 
          @click="$emit('changePage', pagination.url)"
          :class="{disabled: !pagination.url,
          active: pagination.active}">
    
          </a>
        </li>
      </ul>
    </nav>
  </main>
</template>

<style lang="scss" scoped></style>