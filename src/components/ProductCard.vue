<script setup>
import { ref ,onMounted  } from 'vue';


const data = ref(null)
const emit = defineEmits(['Lesproduits']);

const getData  = async () => {
    try {
    const response  =  await fetch ('https://dummyjson.com/products') ; 
    const res = await response.json(); 
    data.value = res.products ; 
    }catch(err) {
console.log("error survenu au niveau du fetch ", err);
    }
}
onMounted(getData);



console.log("https://dummyjson.com/products");


</script>


<template>
  <p>Page liste des produits</p>
  <h1>productCard</h1>

  <section class="container" v-if="data">
      <div v-for="tab in data" :key="tab.id" class="card">
          <div> <img :src="tab.thumbnail" alt=""> </div>
          <h3>{{ tab.title }} </h3>
          <p> category: {{ tab.category }}</p>
          
          <RouterLink :to="`/productDetailsView/${tab.id}`">
            <button @click="emit('Lesproduits', tab)">Details</button>
          </RouterLink>
          
          <RouterLink :to="`/CartView/${tab.id}`">
            <button @click="emit('Lesproduits', tab)">Ajouter</button>
          </RouterLink>
      </div>
  </section>
</template>

<style scoped>
/* Grille principale */
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  padding: 20px;
}

/* Style de chaque carte */
.card {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centre tout horizontalement */
  text-align: center;
  padding: 20px;
  border-radius: 15px;
  background: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

/* Style de l'image dans la carte */
.card img {
  width: 100%;
  height: 200px;
  object-fit: cover; /* Évite de déformer l'image */
  border-radius: 10px;
  margin-bottom: 15px;
}

/* Titres et textes */
h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #333;
}

p {
  color: #666;
  margin-bottom: 15px;
}

/* Style des boutons (uniforme avec tes autres pages) */
button {
  width: 200px; /* Largeur fixe pour l'uniformité */
  margin: 5px 0;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s, transform 0.2s;
}

/* Bouton Details */
button:first-of-type {
  background-color: #4f46e5;
  color: white;
}

/* Bouton Ajouter */
button:last-of-type {
  background-color: #10b981;
  color: white;
  margin-bottom: 10px;
}

button:hover {
  transform: scale(1.05);
  filter: brightness(1.1);
}

/* Supprime le soulignement des liens */
a {
  text-decoration: none;
}
</style>