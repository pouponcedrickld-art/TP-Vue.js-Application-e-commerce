
<script setup>
import { RouterLink, RouterView } from 'vue-router';
//////////////////////////////////////

import { reactive } from 'vue';

const panier = reactive([]);

// Fonction pour ajouter un produit
const ajouterAuPanier = (produit) => {
  const existant = panier.find(item => item.id === produit.id);
  if (existant) {
    existant.quantite++;
  } else {
    panier.push({ ...produit, quantite: 1 });
  }
};

// Ajouter cette fonction dans App.vue
const viderPanier = () => {
  panier.splice(0, panier.length);
};
// Fonction pour supprimer un produit
const supprimerDuPanier = (id) => {
  const index = panier.findIndex(item => item.id === id);
  panier.splice(index, 1);
};
/////////////////////////////////////
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
<!-- //////////////////// -->
<RouterView 
  :panier="panier" 
  @ajouter="ajouterAuPanier"
  @supprimer="supprimerDuPanier"
  @valider-paiement="viderPanier"
/>
<!-- ///////////////////////////// -->
</template>

<!-- <style scoped>

.router-link-exact-active {
  background-color: #1b395094;
  color: #ffffff
}
nav{
  display: flex;
  justify-content: space-around;
}
:global(body) {
    background-color: #e6b7b700;  
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
  height: 4vh;
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
  /* backdrop-filter: blur(10px);       Flou de l'arrière-plan */
  /* -webkit-backdrop-filter: blur(10px); Compatibilité Safari */
  
  /* Bordure "reflet de verre" */
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5); */
  
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
</style> -->

<style>
/* Reset et Thème Sombre Global */
:global(body) {
  background-color: #0a0a0a !important; /* Noir profond de l'image */
  color: #ffffff !important;
  margin: 0;
  font-family: 'Playfair Display', serif; /* Style luxueux */
}

:global(h1, h2, h3) {
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 700;
}

/* Barre de Navigation "Grance Style" */
nav {
  background: rgba(10, 10, 10, 0.95) !important;
  border-bottom: 1px solid #222 !important;
  padding: 25px 50px !important;
  display: flex;
  justify-content: center !important;
  gap: 40px !important;
}

nav a {
  color: #888 !important;
  font-size: 0.9rem !important;
  letter-spacing: 2px;
  transition: 0.4s;
}

nav a:hover, nav a.router-link-active {
  color: #d4af37 !important; /* Couleur Or/Bronze de l'image */
  background: none !important;
  border-bottom: none !important;
}
</style>