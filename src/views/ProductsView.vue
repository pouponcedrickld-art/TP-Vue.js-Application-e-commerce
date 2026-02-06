<script setup>
import ProductCard from '@/components/ProductCard.vue';
import { ref, onMounted } from 'vue';

const data = ref(null);

const getData = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const res = await response.json();
    data.value = res.products;
  } catch(err) {
    console.log("Erreur:", err);
  }
};

onMounted(getData);
</script>

<template>
  <h1>productsView</h1>
  <div v-if="data">
    <ProductCard 
       v-for="produit in data" 
       :key="produit.id" 
       :tab="produit" 
       @ajouter="$emit('ajouter', $event)" 
    />
  </div>
</template>