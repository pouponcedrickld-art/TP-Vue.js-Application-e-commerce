
<script setup>


</script>


<template>

<h1>CartItem</h1>
<p>le panier </p>

<div>
    <p> Afficher les produits du panier</p>
  <button>Ajouter</button> 
  <button>Supprimer</button> 
  <span> total:???</span> 
</div>
<p>
    
Le panier doit :

* Être stocké dans un **state global simple** (ex : `reactive()` dans `App.vue`)
* Être passé aux composants via `props`
* Être modifié via des événements (`emit`)

Fonctionnalités obligatoires :

* Ajouter un produit
* Afficher les produits du panier
* Calculer le total
* Supprimer un produit
</p>
</template>


<style scoped>


</style>