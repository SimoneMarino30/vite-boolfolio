<script>
import ContactsPage from '../pages/ContactsPage.vue';

// import MyComponent from "./components/MyComponent.vue";

export default {
    name: "header",
    props: {
        title: String,
    },
    components: { ContactsPage }
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary" style="border-bottom: 1px solid yellowgreen">
    <div class="container">
      <a class="navbar-brand" href="#">{{ title }}</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse ms-auto flex-grow-0" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
           <router-link :to="{ name: 'home' }" class="nav-link">
             Homepage
            </router-link>
          </li>

          <li class="nav-item">
           <router-link :to="{ name: 'projects' }" class="nav-link">
             Projects
            </router-link>
          </li>

          <li class="nav-item">
           <router-link :to="{ name: 'contacts' }" class="nav-link">
             Contacts
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  .debug {
    background-color: yellowgreen;
  }
</style>

