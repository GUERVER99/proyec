import { defineStore } from 'pinia';

import { fetchWrapper, router } from '@/helpers';

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        //inicialice el estado desde el almacenamiento local para permitir que el usuario permanezca conectado
        user: JSON.parse(localStorage.getItem('user')),
        returnUrl: null
    }),
    actions: {
        async login(username, password) {
            const user = await fetchWrapper.post(`${baseUrl}/authenticate`, { username, password });

            // actualizar el estado de pinia
            this.user = user;

            // almacene los detalles del usuario y jwt en el almacenamiento local para mantener al usuario conectado entre actualizaciones de página
            localStorage.setItem('user', JSON.stringify(user));

            // redirigir a la URL anterior o por defecto a la página de inicio
            router.push(this.returnUrl || '/');
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            router.push('/login');
        }
    }
});
