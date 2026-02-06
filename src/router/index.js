import { createRouter, createWebHistory } from 'vue-router'
import ProductCard from '@/components/ProductCard.vue'
import CartItem from '@/components/CartItem.vue'
import HomeView from '@/views/HomeView.vue'
import ProductDetailsView from '@/views/ProductDetailsView.vue'
import ProductsView from '@/views/ProductsView.vue'
import CartView from '@/views/CartView.vue'
import PayementForm from '@/components/PayementForm.vue'
import Details from '@/components/Details.vue'

const routes = [
  { path: '/' ,  component: HomeView},
  { path: '/cartView/:id' ,  component: CartView},
  { path: '/productsView' ,  component: ProductsView},
  { path: '/productDetailsView/:id' ,  component: ProductDetailsView},
  { path: '/cartItem' ,  component: CartItem },
  { path: '/productCard' ,  component: ProductCard  },
  { path: '/payementForm' ,  component: PayementForm },
  { path: '/details/:id' ,  component: Details ,props: true},
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
