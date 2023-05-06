<script setup>
import { RouterLink, RouterView } from 'vue-router';

import { useAuthStore } from '@/stores';

const authStore = useAuthStore();
</script>

<template>
    <div class="app-container bg-light">
        <nav v-show="authStore.user" class="navbar navbar-expand navbar-dark bg-dark">
            <div class="navbar-nav">
                <RouterLink to="/" class="nav-item nav-link">INICIO</RouterLink>
                <RouterLink :to="{name: 'eps'}" class="nav-item nav-link">LISTADO DE EPS</RouterLink>
                <RouterLink :to="{ name: 'usuarios' }" class="nav-item nav-link">USUARIOS</RouterLink>
                <RouterLink :to="{name:'contacto'}" class="nav-item nav-link">CONTACTENOS</RouterLink>
                <a @click="authStore.logout()" class="nav-item nav-link">CERRAR SESION</a>
            </div>
        </nav>
        <div class="container pt-4 pb-4">
            <RouterView />
        </div>
    </div>
</template>

<style>
@import '@/assets/base.css';
</style>