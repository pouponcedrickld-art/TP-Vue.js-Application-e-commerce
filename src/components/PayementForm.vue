<template>
  <div class="success-container">
    <div class="icon-success">✅</div>
    <h2>Paiement réussi !!</h2>
    <p>Merci pour votre achat, votre commande est en cours de traitement.</p>
    
    <RouterLink to="/productCard">
      <button>Retour à la boutique</button>
    </RouterLink>
  </div>
</template>

<style scoped>
/* Conteneur principal qui centre tout sur la page */
.success-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centre horizontalement */
  justify-content: center; /* Centre verticalement */
  text-align: center; /* Centre le texte */
  min-height: 70vh; /* Prend une bonne partie de la hauteur de l'écran */
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

/* Optionnel : Style pour l'icône de succès */
.icon-success {
  font-size: 4rem;
  margin-bottom: 20px;
}

h2 {
  margin-bottom: 15px;
  color: #27ae60; /* Vert pour le succès */
  font-size: 2rem;
}

p {
  margin: 8px 0;
  font-size: 1.1rem;
  color: #555;
}

/* Le bouton Retour (identique au précédent) */
button {
  margin-top: 30px;
  padding: 12px 40px;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
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