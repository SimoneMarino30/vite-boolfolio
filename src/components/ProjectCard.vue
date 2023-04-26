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
          <!-- <img :src="project.link ? url('storage/' . project.link) : 'https://www.frosinonecalcio.com/wp-content/uploads/bfi_thumb/default-placeholder-38gbdutk2nbrubtodg93tqlizprlhjpd1i4m8gzrsct8ss250.png' " alt="" class="img-fluid"> -->

          <!-- <img :src="project.link" alt="project-image"> -->

          <!-- ! SOLUZIONE FAI DA TE -->
          <div>
            <img v-if="project.link" :src="project.link" alt="project-image" />
            <img v-else src='https://www.frosinonecalcio.com/wp-content/uploads/bfi_thumb/default-placeholder-38gbdutk2nbrubtodg93tqlizprlhjpd1i4m8gzrsct8ss250.png' alt="placeholder-image" class="img-fluid"/>
          </div>
          
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
      </div>
    </div>      
</template>

<style lang="scss" scoped></style>