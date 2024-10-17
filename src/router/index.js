import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../components/AboutView.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import AddProduct from '../components/AddProduct.vue'
import ListeProduit from "../components/ListeProduit.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/Registre',
      name: 'registre',
      component: SignUp
    },
     {
      path: '/connection',
      name: 'login',
      component: Login
    },
    {
      path: '/addProduct',
      name: 'addproduct',
      component: AddProduct
    },
    {
      path: '/fetchProduct',
      name: 'fetcheProduct',
      component: ListeProduit
    }
    
  ]
})

export default router
