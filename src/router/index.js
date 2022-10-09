import { createRouter, createWebHistory } from 'vue-router'
import TurMain from '@/pages/TurMain'
import TurHtml from '@/pages/TurHtml'
import TurJs1 from '@/pages/TurJs1'
import TurJs2 from '@/pages/TurJs2'

const routes = [
  {
    path: '/',
    name: 'main',
    component: TurMain
  },
  {
    path: '/html2',
    name: 'html2',
    component: TurHtml
  },
  {
    path: '/js1',
    name: 'js1',
    component: TurJs1
  },
  {
    path: '/js2',
    name: 'js2',
    component: TurJs2
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
