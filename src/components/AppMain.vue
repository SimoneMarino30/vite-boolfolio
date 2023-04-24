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
  },
  
  components: { ProjectCard },
};
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <div class="d-flex flex-wrap">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" class="m-3"/>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>