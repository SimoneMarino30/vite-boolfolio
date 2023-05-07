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
    <button class="navbar-toggler m-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse m-auto flex-grow-0" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'home' }" class="nav-link">
            <a class="navbar-item" href="#"> <!-- style="border: 1px solid yellowgreen"-->
              <img src="../assets/logo.png" alt="logo">
            </a>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link :to="{ name: 'about' }" class="nav-link">
            About
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
  </nav>
</template>

<style lang="scss" scoped></style>

