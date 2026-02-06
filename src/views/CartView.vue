<script setup>
import { computed } from 'vue';

const props = defineProps(['panier']);
const emit = defineEmits(['supprimer']);

// Calcul dynamique du total
const totalGeneral = computed(() => {
  return props.panier.reduce((acc, item) => acc + (item.price * item.quantite), 0);
});
</script>

<template>
  <div class="cart-container">
    <h1>Mon Panier</h1>

    <div v-if="panier.length > 0">
      <div v-for="item in panier" :key="item.id" class="cart-item">
        <img :src="item.thumbnail" width="50">
        <span>{{ item.title }} (x{{ item.quantite }})</span>
        <span>{{ item.price * item.quantite }} €</span>
        <button @click="emit('supprimer', item.id)">❌</button>
      </div>
      <div class="total">
        <h3>Total : {{ totalGeneral.toFixed(2) }} €</h3>
        <RouterLink to="/payementForm">
          <button class="btn-pay">Passer au paiement</button>
        </RouterLink>
      </div>
    </div>

    <div v-else>
      <p>Votre panier est vide.</p>
    <RouterLink  to="/productCard"> <p>Retourner à la boutique</p> </RouterLink>

    </div>
  </div>
</template>
<!-- <style scoped>
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
  color: rgb(0, 0, 0);
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
span  {
  color: black;

}
p{ color: black;}
 h3 {
  color: black;

}
</style> -->
<style scoped>
.cart-container, .form-container {
  background: #111 !important;
  border: 1px solid #222;
  color: white;
  padding: 50px;
  max-width: 600px;
}

input {
  background: #1a1a1a !important;
  border: 1px solid #333 !important;
  color: white !important;
  padding: 15px !important;
  border-radius: 0 !important;
}

.btn-pay {
  background: #d4af37 !important; /* Bouton Or */
  color: black !important;
  border: none !important;
  font-weight: 900 !important;
}

.total h3 {
  border-top: 1px solid #d4af37;
  padding-top: 20px;
  color: #d4af37;
}
</style>


