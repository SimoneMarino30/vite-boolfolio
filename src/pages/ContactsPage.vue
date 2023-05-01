<script>
import AppMailTo from '../components/AppMailTo.vue';
import AppSocialLinks from '../components/AppSocialLinks.vue';


export default {
    
  components: { AppMailTo, AppSocialLinks }

};
</script>

<template>
  <div class="container">
    <AppMailTo class="contacts"/>
    <AppSocialLinks/>
  </div>
</template>

<style lang="scss" scoped>
  .contacts {
    writing-mode: horizontal-tb;
  }
</style>