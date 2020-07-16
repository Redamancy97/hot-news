import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "../views/index/Index";
import News from "../views/news/News";
import Music from "../views/music/Music";
import My from "../views/my/My";
import Features from "../views/features/Features";
import IndexLayout from "../layout/IndexLayout";
import Search from "../views/search/Search";
import OtherLayout from "../layout/OtherLayout";
import Login from "../views/my/components/Login";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/index',
    },
    {
        path: '/index',
        name: 'index',
        component: IndexLayout,
        children: [{
            path: "",
            component: Index
        }, {
            path: '/news',
            component: News
        }, {
            path: '/search',
            component: Search
        }]
    },
    {
        path: '/other',
        component: OtherLayout,
        children: [
            {
                path: '/music',
                component: Music
            }, {
                path: '/my',
                component: My,
                children: [{
                    path: '/my/login',
                    component: Login
                }]
            }, {
                path: '/features',
                component: Features
            },
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
