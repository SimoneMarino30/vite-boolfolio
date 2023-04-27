<script>
// AXIOS CALL
import axios from "axios";

import ProjectCard from "../components/ProjectCard.vue";

export default {
  name: 'detail',
  
  data() {
    return {
      project: null,
      title: "DetailProjectPage"
    }
  },

  components: { ProjectCard,  },

  created() {
    // console.log(this.$route.params.id);

    axios
    .get(`http://127.0.0.1:8000/api/projects/${this.$route.params.id}`)
     // CIO' CHE VIENE LETTO DALL'API
    .then((response) => {
      if (response.data && response.data.length > 0)
      this.project = response.data[0];
        // console.log(response.data[0]);
      })
    .catch((err) => {
      this.$router.push({name: 'not-found'})
    })
    .finally(() => {
       
    A});
  },
  
  
  
};
</script>

<template>
  <h1>{{ title }}</h1>

  <ProjectCard :project="project" v-if="project"/>
</template>

<style lang="scss" scoped></style>