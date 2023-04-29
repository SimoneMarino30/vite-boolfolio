<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  
  name: 'project-card',

  props: {
    project: Object,
    isDetail: Boolean,
  },
};
</script>

<template>
    <div class="card" style="width: 25rem;">
      <figure>
          <img :src="project.link" alt="project-image" class="img-fluid w-100"/>
          <figcaption>{{ project.date }}</figcaption>
      </figure>
      <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text">{{ project.description }}</p>
      </div>
      <div class="row">
        <div class="col-6">
          <p>Technologies:</p>
          <div class=" testo-bordato">
            <div v-for="technology in project.technologies" :key="technology.id" class="d-flex">
              <span class="badge p-2 m-2" :style="{backgroundColor: technology.color}">{{ technology.label }}</span>
            </div>
          </div>
        </div>

        <div class="col-6">
          <p>Type:</p>
          <div class="testo-bordato">
            <span class="badge p-1" :style="{backgroundColor: project.type?.color}">{{ project.type?.label }}</span>
          </div>
        </div>
      </div>

     
        
  
      <router-link 
        v-if="!isDetail"
        class="btn btrn-success btn-sm my-5"
        :to="{
          name: 'detail', 
          params: {
          id: project.id
          }
        }">
        <button class="btn btn-primary">Visualizza progetto</button>
       
        
      </router-link>
    </div> 
         
</template>

<style lang="scss" scoped>
.testo-bordato {
 color: #000;
 text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
}


</style>