<script>
// COMPONENTS
import AppMailTo from '../components/AppMailTo.vue';
import AppSocialLinks from '../components/AppSocialLinks.vue';

export default {
  name: 'about',
  
  components: { AppMailTo, AppSocialLinks }
};
</script>

<template>
  
  <section class="row">
    <div class="col-1 mt-auto">
      <AppSocialLinks/>
    </div>
    

    <div class="central-about-box col-10 position-relative">
      <div class="about-box text-start p-3">
        <h4 class="m-5">
          I am a Junior Web Developer passionate about both front-end and back-end technologies.
          <br class="mb-3">
          I have a solid knowledge of HTML, CSS, and JavaScript, as well as leading front-end  frameworks like Vue.js.
          <br class="mb-3">
          I have experience creating web applications using the PHP programming language and the Laravel back-end framework, which enables me to build highly performant and scalable websites.
          <br class="mb-3">
          I am capable of creating modern and responsive user interfaces using the best responsive design practices, and I am always seeking new challenges to enhance my skills and provide innovative solutions for my clients
        </h4>
      </div>
      <div class="position-absolute">
        <!-- FOR PICTURE -->
      </div>
    </div>

    <div class="col-1 mt-auto">
      <AppMailTo/>
    </div>
    
  </section>
  
</template>

<style lang="scss" scoped>
section {
    // border: 2px solid yellowgreen;
    flex-direction: row;
    display: flex;
    
    
  .central-about-box {
  // border: 2px solid yellow;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 88vh;

    
 
    .about-box {
      min-height: 33rem;
      max-width: 33rem;
      border: 2px solid yellowgreen;
    }
  }
}</style>