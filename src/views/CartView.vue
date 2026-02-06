

<script setup>
import { ref ,onMounted  } from 'vue';
import { useRoute , RouterLink } from 'vue-router';
// import ProductCard from '@/components/ProductCard.vue';
const emit = defineEmits(['Lesproduits']);

const route = useRoute();
const data = ref(null);

const getData  = async () => {
  const id = route.params.id ;
   const res = await fetch(`https://dummyjson.com/products/${id}`);
    data.value = await res.json(); 
};
onMounted(getData);

console.log("https://dummyjson.com/products");

</script>

<template>
  <div v-if="data" class="container">
    <h1>{{ data.title }}</h1>
    <img :src="data.thumbnail" />
    <p>Prix : {{ data.price }}€</p>

    <div class="button-group">
      <RouterLink to="/payementForm">
        <button class="btn-pay">Payer</button>
      </RouterLink>
      <RouterLink to="/productCard">
        <button class="btn-back">Retour</button>
      </RouterLink>
    </div>
  </div>
  <div v-else>Chargement...</div>
</template>

<style scoped>
/* Ta logique de centrage */
.container {
  display: flex;
  flex-direction: column;
  align-items: center; 
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

/* LA CORRECTION : Aligne les boutons horizontalement */
.button-group {
  display: flex;
  flex-direction: row; /* Force l'alignement horizontal */
  gap: 15px; /* Espace entre Payer et Retour */
  margin-top: 20px;
}

button {
  padding: 12px 30px;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.2s, background 0.3s;
}

/* Optionnel : Couleurs différentes */
.btn-pay { background-color: #10b981; }
.btn-back { background-color: #6b7280; }

button:hover {
  transform: scale(1.05);
  opacity: 0.9;
}

a { text-decoration: none; }

</style>



