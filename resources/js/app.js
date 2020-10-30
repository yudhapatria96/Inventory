

require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Router imported
import {routes} from './routes';

// Import User class
import User from './helper/User';
window.User = User;

const router = new VueRouter({
    routes,
    mode: 'history'
  })



const app = new Vue({
    el: '#app',
    router
});
