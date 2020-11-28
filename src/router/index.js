import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import Student from '../views/Student.vue'
import Class from '../views/Class.vue'
import Reportes from '../views/Reportes.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component:Register
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component:Dashboard
  },
  {
    path: '/student',
    name: 'Student',
    component:Student
  },
  {
    path: '/class',
    name: 'Class',
    component:Class
  },
  {
    path: '/report',
    name: 'Reportes',
    component:Reportes
  }  
]

const router = new VueRouter({
  routes
})

export default router
