<script setup>
import { ref } from 'vue';

const emit = defineEmits(['valider-paiement']);

// États du formulaire
const paye = ref(false);
const nom = ref('');
const carte = ref('');

// Fonction de simulation de paiement
const gererPaiement = () => {
  if (nom.value.trim() === '' || carte.value.trim() === '') {
    alert("Veuillez remplir tous les champs.");
    return;
  }
  
  // 1. On vide le panier global
  emit('valider-paiement');
  
  // 2. On affiche le message de succès
  paye.value = true;
};
</script>

<template>
  <div v-if="!paye" class="form-container">
    <h2>Paiement</h2>
    <form @submit.prevent="gererPaiement">
      <div class="field">
        <label>Nom sur la carte</label>
        <input v-model="nom" type="text" placeholder="M. Poupon" required>
      </div>
      <div class="field">
        <label>Numéro de carte (fictif)</label>
        <input v-model="carte" type="text" placeholder="4444 4444 4444 4444" required>
      </div>
      <button type="submit" class="btn-pay">Payer maintenant</button>
    </form>
  </div>

  <div v-else class="success-container">
    <div class="icon-success">✅</div>
    <h2>Paiement réussi !!</h2>
    <p>Merci <strong>{{ nom }}</strong>, votre commande est en cours de traitement.</p>
    <RouterLink to="/productsView">
      <button>Retour à la boutique</button>
    </RouterLink>
  </div>
</template>

<!-- <style scoped>
.form-container, .success-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 60vh;
  max-width: 500px;
  margin: 0 auto;
  padding: 40px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.field {
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 5px;
}

input {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
}

.icon-success { font-size: 4rem; margin-bottom: 20px; }
h2 { color: #27ae60; margin-bottom: 20px; }
.btn-pay { background-color: #10b981; color: white; }

button {
  padding: 12px 40px;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.2s;
}

button:hover { transform: scale(1.05); }
a { text-decoration: none; }
</style> -->


git init
git add .
git commit -m "tous est fonctionnelles -il manque juste un peu de style"
git remote add origin https://github.com/pouponcedrickld-art/TP-Vue.js-Application-e-commerce.git
git push -u origin poupon
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