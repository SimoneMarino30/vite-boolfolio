<script>
// AXIOS CALL
import axios from "axios";

import ProjectCard from "../components/ProjectCard.vue";

export default {
  name: 'detail',
  
  data() {
    return {
      project: null,
    }
  },

  components: { ProjectCard,  },

  created() {
    // console.log(this.$route.params.id);

    axios
    .get(`http://127.0.0.1:8000/api/projects/${this.$route.params.id}`)
     // CIO' CHE VIENE LETTO DALL'API
    .then((response) => {
      if (response.data)
      this.project = response.data;

        console.log(response.data);
      })
    .catch((err) => {
      console.log(err);
      // se c'e un errore
      this.$router.push({name: 'not-found'});
    })
    .finally(() => {
       
    });
  },
  
  
  
};
</script>

<template>
  <h1>{{ project?.title }}</h1>

  <ProjectCard :project="project" v-if="project" :isDetail="true"/>
</template>

<style lang="scss" scoped></style>