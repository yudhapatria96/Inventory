

require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Router imported
import {routes} from './routes';

// Import User class
import User from './helper/User';
window.User = User;

// Sweet Alert start

import Swal from 'sweetalert2'
window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
});
window.Toast = Toast;


// Sweeat Alert end

const router = new VueRouter({
    routes,
    mode: 'history'
  })



const app = new Vue({
    el: '#app',
    router
});
