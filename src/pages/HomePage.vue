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

    <AppSocialLinks />



    <div class="central-box img-fluid" style="border: 1px solid red"> <!---->
      <div class="info-box text-start p-3" style="border: 1px solid blue"> <!---->
        <div class="img-bg  my-3"></div>
        <div class="home-text mx-auto" style="border: 1px solid lightseagreen"> <!---->
          <div class="home-title" style="border: 1px solid coral"> <!---->
            Developing things for the web.
          </div>
          <div class="home-sub-title mt-5">
            I’m a junior web developer specializing in building and designing exceptional digital
            experiences.
            <br class="mb-3">
            Currently, I’m seeking new opportunities to further improve my passion/work in this field.

            <!-- ************ -->
            <!-- I'am a junior web developer seeking new opportunities. <br class="mb-3">
          I'am enthusiastic about learning and putting my skills to work on challenging projects. <br class="mb-3">
          In my portfolio, you will find a selection of my most significant web development projects. -->
            <!-- **** TEXT FOR ABOUT MAYBE? **** -->
            <!-- I am a Junior Web Developer passionate about both front-end and back-end technologies.  I have a solid knowledge of HTML, CSS, and JavaScript, as well as leading front-end  frameworks like Vue.js. I have experience creating web applications using the PHP  programming language and the Laravel back-end framework, which enables me to build   highly performant and scalable websites. I am capable of creating modern and responsive   user interfaces using the best responsive design practices, and I am always seeking new   challenges to enhance my skills and provide innovative solutions for my clients -->
          </div>
        </div>

        <router-link :to="{ name: 'projects' }" class="mt-5">
          <button class="btn">Checkout my Projects</button>
        </router-link>
      </div>
    </div>


    <AppMailTo />


  </section>
</template>

<style lang="scss" scoped>
section {
  // border: 2px solid yellowgreen;
  flex-direction: row;
  display: flex;

  .central-box {
    // border: 2px solid yellowgreen;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    height: 88vh;
  }

  .info-box {
    // min-height: 33rem;
    // max-width: 33rem;
    // border: 2px solid yellowgreen;
    // aspect-ratio: 16 / 9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;

    .img-bg {
      width: 70%;
      height: 12rem;
      background-image: url(../assets/home-waves.png);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      // border: 2px solid violet;
    }

    .home-title {
      font-size: 4rem;
      color: rgb(55, 139, 83);
    }

    .home-sub-title {
      width: 50%;
      font-size: 1rem;
    }
  }

  .btn {
    background-color: rgb(55, 139, 83);
    color: black;
  }
}
</style>
