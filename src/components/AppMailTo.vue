<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world"
    }
  }

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <div class="contact-mail mb-5 col-1">
      
      <a href="mailto:simo.marino@outlook.com" class="d-flex flex-row text-decoration-none ms-5" style="color: yellowgreen">simo.marino@outlook.com</a>
    </div>
</template>

<style lang="scss" scoped>
  .contact-mail {
  writing-mode: vertical-lr;
  display: flex;
  flex-direction: column-reverse;
  margin-top: auto;

  a {
        padding: 1rem;
      }
  }

  
</style>