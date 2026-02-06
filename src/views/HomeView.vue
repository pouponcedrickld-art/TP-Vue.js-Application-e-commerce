
<script setup>
import { RouterLink, RouterView  } from 'vue-router';
import { ref ,onMounted } from 'vue';

const data = ref(null)
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

// console.log(product.thumbnail);

</script>


<template>
  <div>

<h1>HomeView</h1>
<h1>
    Bienvenue sur Poupon-showping
</h1>

<!-- <div class="container">
    <div v-for="tab in data" :key="tab.id">
        <h3>
           {{  tab.title }} 
        </h3>
          <div>
                <img :src="tab.thumbnail" alt="">
          </div>
    <p> category: {{ tab.category }}</p>
    <p> price: {{ tab.price }}$</p>
    <p> rating: {{ tab.rating }}    </p>
    <p> stock: {{ tab.stock }}    </p>         
</div>
</div> -->
<!-- <RouterLink to="/paymentForm${tab.id}"> <button> voir les details </button></RouterLink> -->
<div class="container">
<RouterLink to="/ProductCard"> <button> Visiter nos pages </button></RouterLink>
</div>
    
  </div>
</template>


<style scoped>
/* Centre tout dans le composant */
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 80vh;
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
  color: #333;
}

/* Style direct du bouton */
button {
  padding: 15px 40px;
  font-size: 1.2rem;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

button:hover {
  transform: scale(1.05);
  background-color: #4338ca;
}

a {
  text-decoration: none;
}

</style>