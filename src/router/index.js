import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Error from '../views/Error.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/error',
        name: 'Error',
        component: Error,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
