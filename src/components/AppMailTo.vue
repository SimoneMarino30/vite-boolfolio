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
  <div class="contact-mail">
    <a href="mailto:simo.marino@outlook.com" class="text-decoration-none fs-5" style="color: yellowgreen">simo.marino@outlook.com</a>
  </div>
</template>

<style lang="scss" scoped>
  .contact-mail {
  writing-mode: vertical-lr;
  display: flex;
  flex-direction: column-reverse;
  // margin-top: auto;
  // padding-right: 3rem;
  position: fixed;
  bottom: 10rem;
  right: 1rem;
}
</style>