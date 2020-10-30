
let login = require('./components/auth/login.vue').default;
let register = require('./components/auth/register.vue').default;
let forgetpassword = require('./components/auth/forgetpassword.vue').default;


export const routes = [
    { path: '/', component: login, name: '/' },
    { path: '/register', component: register, name: 'register' },
    { path: '/forgetpassword', component: forgetpassword, name: 'forgetpassword' }

  ]