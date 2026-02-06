
<script setup>
import { ref ,onMounted  } from 'vue';
import { useRoute } from 'vue-router';
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
  <div v-if="data">
    <h1>{{ data.title }}</h1>
    <img :src="data.thumbnail" />
    <p>{{ data.description }}</p>
    <p>Prix : {{ data.price }}€</p>
    <p> discountPercentage: {{ data.discountPercentage }}</p>
    <p> rating: ⭐{{ data.rating }}</p>
    <p> brand: {{ data.brand }}</p>
    
    <RouterLink  to="/productCard"> <button>Retour </button></RouterLink>
  </div>
  <div v-else>Chargement...</div>
</template>


<style scoped>

/* Conteneur principal qui centre tout */
div {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centre horizontalement */
  text-align: center; /* Centre le texte */
  max-width: 800px;
  margin: 0 auto; /* Centre le bloc sur la page */
  padding: 20px;
}

/* Style de l'image */
img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

/* Espacement des textes */
h1 {
  margin-bottom: 15px;
  color: #333;
}

p {
  margin: 8px 0;
  font-size: 1.1rem;
  color: #555;
}

/* Le bouton Retour */
button {
  margin-top: 30px;
  padding: 12px 30px;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.2s, background 0.3s;
}

button:hover {
  background-color: #3730a3;
  transform: scale(1.05);
}

/* Supprime le soulignement du lien */
a {
  text-decoration: none;
}
</style>