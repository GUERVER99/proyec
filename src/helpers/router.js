import { createRouter, createWebHistory } from 'vue-router';

import { useAuthStore } from '@/stores';
import { LoginView } from '@/views';
import { HomeView} from '@/views';
import usuarios from '../views/usuarios.vue'
import listado_eps from '../views/listado_eps.vue'
import contactenos from '../views/contactenos.vue'


export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active',
    routes: [
        { path: '/', component: HomeView },
        { path: '/login', component: LoginView },
        { path: '/usuarios', name: 'usuarios', component: usuarios },
        { path: '/listado_eps', name: 'eps', component: listado_eps},
        { path: '/contactenos', name: 'contacto', component: contactenos}
    ]
});

router.beforeEach(async (to) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const auth = useAuthStore();

    if (authRequired && !auth.user) {
        auth.returnUrl = to.fullPath;
        return '/login';
    }
});
