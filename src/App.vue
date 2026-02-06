<script setup>
import { RouterLink, RouterView } from 'vue-router';


const menu = [
  { path: '/' ,             title: 'HomeView'},
  { path: '/productsView' , title: 'ProductsView'},
  { path: '/cartView' ,     title: 'CartView'},
  // { path: '/productDetailsView' , title: 'ProductDetailsView'},
  // { path: '/productCard' ,  title: 'ProductCard'  },
  // { path: '/cartItem' ,      title: 'CartItem' },
  // { path: '/payementForm' ,  title: 'PayementForm' },
  // { path: '/details' ,      title: 'Details' },
]
</script>

<template>
<h1>
    Bienvenue sur Poupon-showping
</h1>
<nav>
<RouterLink 
   v-for="item in menu" 
      :key="item.path" 
      :to="item.path"
      style="margin-right: 10px;"
  > {{ item.title }} </RouterLink>
</nav>


<RouterView /> 
</template>

<style scoped>
.router-link-exact-active {
  background-color: #1b395094;
  color: #ffffff
}
nav{
  display: flex;
  justify-content: space-around;
}
:global(body) {
    background-color: #e6b7b717;  
    /* background-color: #750b0b10;   */
   /* background-color: #111;  */
  color: #eee;
  margin: 0;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
}

 :global(h1){
  color: #b1361e;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
 }

nav {
  background: #1e1e1e;
  padding: 15px 40px;
  border-bottom: 1px solid #333;
  display: flex;
  gap: 20px;
}

nav a {
  color: #020202;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: bold;
  transition: 0.3s;
}

nav a:hover, nav a.router-link-active {
  color: #b1361e; /* Le rouge Codewars */
}

hr {
  border: 0;
  border-top: 1px solid #333;
  margin: 0;
}

nav {
  /* Effet Glassmorphism */
  background: rgba(30, 30, 30, 0.7); /* Couleur sombre mais transparente */
  backdrop-filter: blur(10px);       /* Flou de l'arrière-plan */
  -webkit-backdrop-filter: blur(10px); /* Compatibilité Safari */
  
  /* Bordure "reflet de verre" */
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  
  /* Fixation en haut (optionnel mais recommandé pour l'effet de verre) */
  position: sticky;
  top: 0;
  z-index: 1000;

  /* Tes autres styles */
  padding: 15px 40px;
  display: flex;
  gap: 20px;
  justify-content: space-around;
}

/* On améliore un peu l'effet sur les liens actifs */
nav a.router-link-active {
  color: #fff; /* On fait ressortir le blanc sur le verre */
  background: rgba(177, 54, 30, 0.2); /* Fond rouge très léger */
  padding: 5px 12px;
  border-radius: 4px;
  border-bottom: 2px solid #b1361e;
}
</style>

