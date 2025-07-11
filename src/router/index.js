import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView/AboutView.vue'
import ServicesView from '@/views/ServicesView/ServicesView.vue'
import ProjectsView from '@/views/ProjectsView/ProjectsView.vue'
import ContactView from '@/views/ContactView/ContactView.vue'

const routes = [
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
    path: '/services',
    name: 'services',
    component: ServicesView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Si hay una posición guardada (como cuando usas el botón atrás), vuelve a esa posición
    if (savedPosition) {
      return savedPosition
    }
    // Para todas las demás navegaciones, ve al top de la página
    return { top: 0 }
  }
})

export default router 