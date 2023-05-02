<script>
// COMPONENTS
import AppSocialLinks from "../components/AppSocialLinks.vue";
import AppMailTo from "../components/AppMailTo.vue";


export default {
  name: 'home',
  

  components: { AppSocialLinks, AppMailTo },
};
</script>

<template>
  
  <section class="row">
    <div class="col-1 mt-auto">
      <AppSocialLinks/>
    </div>
    

    <div class="central-box col-10">
      <div class="info-box text-start p-3">
        <p>Hi, my name is</p>
        <h1 class=" name my-3">Simone Marino</h1>
        
        <h4 class="mt-5">
          I'am a junior web developer seeking new opportunities. <br class="mb-3">
          I'am enthusiastic about learning and putting my skills to work on challenging projects. <br class="mb-3">
          In my portfolio, you will find a selection of my most significant web development projects.
          <!-- **** TEXT FOR ABOUT MAYBE? **** -->
          <!-- I am a Junior Web Developer passionate about both front-end and back-end technologies.  I have a solid knowledge of HTML, CSS, and JavaScript, as well as leading front-end  frameworks like Vue.js. I have experience creating web applications using the PHP  programming language and the Laravel back-end framework, which enables me to build   highly performant and scalable websites. I am capable of creating modern and responsive   user interfaces using the best responsive design practices, and I am always seeking new   challenges to enhance my skills and provide innovative solutions for my clients -->
        </h4>

        <router-link :to="{ name: 'projects' }" class="nav-link mt-5">
          <button class="btn btn-success">Checkout my Projects</button> 
        </router-link>

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
    
    
  .central-box {
  // border: 2px solid yellow;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 88vh;

    .name {
      font-size: 4rem;
      // color: #000;
      text-shadow: -1px 0 yellowgreen, 0 1px yellowgreen, 1px 0 yellowgreen, 0 -1px yellowgreen;
      // border: 2px solid yellowgreen;
    }
 
    .info-box {
      min-height: 33rem;
      max-width: 33rem;
      border: 2px solid yellowgreen;
    }
  }
} 
</style>