<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  name: 'header',
  
  props: {
    title: String,
  },
  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary" style="border-bottom: 1px solid #fff">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">{{ title }}</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
           <router-link :to="{ name: 'home' }" class="nav-link">
             Homepage
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'detail' }" class="nav-link">
             Detail
            </router-link>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
         <li class="nav-item">
           <a class="nav-link disabled">Disabled</a>
         </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>

