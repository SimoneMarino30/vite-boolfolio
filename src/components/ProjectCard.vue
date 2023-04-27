<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      // title: "Hello world"
    }
  },

   props: {
    project: Object,
  },


  // computed: {

  // },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
    <div class="card" style="width: 18rem;">
      <figure>
          <img :src="project.link" alt="project-image" class="img-fluid"/>
          <figcaption>{{ project.date }}</figcaption>
      </figure>
      <div class="card-body">
        <h5 class="card-title" style="height: 5rem;">{{ project.title }}</h5>
        <p class="card-text" style="height: 8.5rem;">{{ project.description }}</p>
      </div>
      <div>
        <p>Technologies:</p>
        <ul>
          <li v-for="technology in project.technologies" :key="technology.id">
            {{ technology.label }}
          </li>
        </ul>
        <p>Type: {{ project.type?.label }}</p>
        
        <router-link :to="{
          name: 'detail', 
          params: {
            id: project.id
          }
        }">
        Vai al dettaglio
        <!-- ! QUANDO PASSO IL PARAMETRO :ID IN INDEX.JS SI ROMPE TUTTO -->
      </router-link>
      </div>
    </div>      
</template>

<style lang="scss" scoped></style>