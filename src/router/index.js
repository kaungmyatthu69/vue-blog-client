import {createRouter,createWebHistory} from "vue-router";
import HomeView from "@/views/HomeView/index.vue";
import BlogView from "@/views/BlogView/index.vue";
import CategoryView from "@/views/CategoryView/index.vue"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/blog',
        name: 'Blog',
        component: BlogView

    },
    {
        path: '/category',
        name: 'Category',
        component: CategoryView

    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;