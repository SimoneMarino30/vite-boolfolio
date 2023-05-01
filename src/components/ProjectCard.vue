<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  
  name: 'project-card',

  props: {
    project: Object,
    isDetail: Boolean,
  },
};
</script>

<template>
    <!-- <div class="card" style="width: 25rem;">
      <figure>
          <img :src="project.link" alt="project-image" class="img-fluid w-100"/>
          <figcaption>{{ project.date }}</figcaption>
      </figure>
      <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text">{{ project.description }}</p>
      </div>
      <div class="row">
        <div class="col-6">
          <p>Technologies:</p>
          <div class=" testo-bordato">
            <div v-for="technology in project.technologies" :key="technology.id" class="d-flex">
              <span class="badge p-2 m-2" :style="{backgroundColor: technology.color}">{{ technology.label }}</span>
            </div>
          </div>
        </div>

        <div class="col-6">
          <p>Type:</p>
          <div class="testo-bordato">
            <span class="badge p-1" :style="{backgroundColor: project.type?.color}">{{ project.type?.label }}</span>
          </div>
        </div>
      </div>

      
        
  
      <router-link 
        v-if="!isDetail"
        class="btn btrn-success btn-sm my-5"
        :to="{
          name: 'detail', 
          params: {
          id: project.id
          }
        }">
        <button class="btn btn-primary">Visualizza progetto</button>
       
        
      </router-link>
    </div>  -->
         

<div class="card position-relative my-5">
  <img class="card-img-top border border-secondary rounded" :src="project.link" alt="MyIcon">
  <div class="card-img-overlay d-flex flex-column justify-content-end">
    <h5 class="card-title text-light">{{project.title}}</h5>
    <p class="card-text text-light">{{project.date}}</p>
    <div class="testo-bordato">
      <span class="badge p-1" :style="{backgroundColor: project.type?.color}">{{ project.type?.label }}</span>
    </div>
  </div>
  <div class="detail-folder">
  <router-link 
    v-if="!isDetail"
    :to="{
    name: 'detail', 
    params: {
    id: project.id
    }
    }">
    
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="yellowgreen" class="bi bi-folder" viewBox="0 0 16 16">
      <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
    </svg>
  </router-link>
</div>
</div>




</template>

<style lang="scss" scoped>
.testo-bordato {
 color: #000;
 text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
}
// *****************
.card-img-top {
  height: 300px; /* Imposta l'altezza dell'immagine */
  object-fit: cover;
}

.border-secondary {
  border: 5px solid yellowgreen; /* Imposta lo stile del bordo dell'immagine */
  box-shadow: 0 0 10px yellowgreen; /* Imposta l'ombra del bordo dell'immagine */
}

.card-img-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.detail-folder {
  position: absolute;
  right: 1rem;
  top: 1rem;
  
}
.card-title,
.card-text {
  margin: 0 0 1rem; /* Imposta il margine inferiore per il titolo e il testo */
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 0 0 2px yellowgreen; /* Imposta l'ombra del bordo dell'immagine */
}
</style>