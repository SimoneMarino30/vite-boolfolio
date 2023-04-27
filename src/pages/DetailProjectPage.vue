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
    console.log(this.$route.params.id);

    axios
      .get(`http://127.0.0.1:8000/api/projects/${this.$route.params.id}`)
      // CIO' CHE VIENE LETTO DALL'API
      .then((response) => {
        this.project = response.data;
        // console.log(response.data);
      })
      .catch((err) => {
        this.$router.push({name: 'not-found'})
      })
      .finally(() => {
       
      });
      console.log(this.$route.params.id);
  },
  
  
  
};
</script>

<template>
  <h1>{{ title }}</h1>

  <ProjectCard :project="project" v-if="project"/>
</template>

<style lang="scss" scoped></style>