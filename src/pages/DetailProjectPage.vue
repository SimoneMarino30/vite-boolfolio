<script>
// AXIOS CALL
import axios from "axios";

// COMPONENTS
import ProjectCard from "../components/ProjectCard.vue";
import AppSocialLinks from "../components/AppSocialLinks.vue";
import AppMailTo from "../components/AppMailTo.vue";

export default {
  name: 'detail',
  
  data() {
    return {
      project: null,
    }
  },

  components: { ProjectCard, AppSocialLinks, AppMailTo  },

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
  <section class="row">
    <AppSocialLinks/>
    <div class="col-10 project-box">
      <ProjectCard :project="project" v-if="project" :isDetail="true"/>
    </div>
    <AppMailTo/>
  </section>
</template>

<style lang="scss" scoped>
section {
    // border: 2px solid yellowgreen;
    flex-direction: row;
    display: flex;
    
    .project-box {
      // border: 2px solid yellow;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
    }
}
</style>