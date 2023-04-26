<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  
  name: 'AppPagination',  

  props: {
    paginations: Array,
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <!-- PAGINATION -->
    <nav aria-label="Project-pagination">
      <ul class="pagination">
        <li v-for="pagination in paginations" class="page-item">
          <button 
            type="button" 
            class="page-link"  
            @click="$emit('changePage', pagination.url)"
            :class="{
            disabled: !pagination.url,
            active: pagination.active
            }"
            v-html="pagination.label"
          ></button>
        </li>
      </ul>
    </nav>
</template>

<style lang="scss" scoped></style>