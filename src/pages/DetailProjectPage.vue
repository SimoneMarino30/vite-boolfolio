<script>
// import ProjectCard from "../components/ProjectCard.vue";

export default {
  name: 'detail',
  data() {
    return {
      project: null,
      title: "DetailProjectPage"
    }
  },

  // !  MI ARRIVA UN OGGETTO VUOTO(PROTOTYPE OBJECT)
  // created() {
  //   console.log(this.$route.params.id);

  //   axios
  //     .get(`http://127.0.0.1:8000/api/projects/${this.$route.params.id}`)
  //     CIO' CHE VIENE LETTO DALL'API
  //     .then((response) => {
  //       this.project = response.data;
  //       console.log(response.data);
  //     })
  //     .catch((err) => {
  //       this.$router.push({name: 'not-found'})
  //     })
  //     .finally(() => {
       
  //     });
  // },
  
  
};
</script>

<template>
  <h1>{{ title }}</h1>
  <!-- <ProjectCard :project="project" v-if="project"/> -->
</template>

<style lang="scss" scoped></style>