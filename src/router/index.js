import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "../views/index/Index";
import News from "../views/news/News";
import Music from "../views/music/Music";
import My from "../views/my/My";
import Features from "../views/features/Features";
import IndexLayout from "../layout/IndexLayout";
import Search from "../views/search/Search";
import Login from "../views/my/components/Login";
import Register from "../views/my/components/Register";
import PersonalCenter from "../views/my/components/PersonalCenter";
import ForgetPassword from "../views/my/components/ForgetPassword";
import ViewInformation from "../views/my/components/ViewInformation";
import ModifyInformation from "../views/my/components/ModifyInformation";
import NewDetail from "../views/news/components/NewDetail";
import store from '../store'
import CollectList from "../views/my/components/CollectList";
import SearchDetail from "../views/search/components/components/SearchDetail";

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
        },
            {
                path: '/news/:articleId',
                name: 'Detail',
                component: News,
            },
            {
                path: '/search',
                component: Search,
            },
            {
                path: '/newdetail/:articleId',
                component: NewDetail,
            },
            {
                path: '/sldetail/:value',
                component:SearchDetail
            },





            {
                path: '/music',
                component: Music
            },
                {
                path: '/my',
                component: My,
                children: [{
                    path: '/my',
                    redirect: '/my/login'
                }, {
                    path: '/my/login',
                    component: Login
                }, {
                    path: '/my/register',
                    component: Register
                }, {
                    path: '/my/personalcenter',
                    component: PersonalCenter,
                    meta: {
                        //需要该能访问
                        isAuth: true
                    }
                }, {
                    path: '/my/forgetpassword',
                    component: ForgetPassword
                }, {
                    path: '/my/viewinformation',
                    component: ViewInformation,
                    meta: {
                        isAuth: true
                    }
                }, {
                    path: '/my/modifyinformation',
                    component: ModifyInformation,
                    meta: {
                        isAuth: true
                    }
                }, {
                    path: '/my/collectList',
                    component: CollectList,
                    meta: {
                        isAuth: true
                    }
                }]
            }, {
                path: '/features',
                component: Features
            },
        ]
    },

    ]
//执行路由守卫之前，先检测一下登录状态
    const loginPromise = store.dispatch("checkLoginStatus");
    const router = new VueRouter({
        mode: 'history',
        base: process.env.BASE_URL,
        routes
    })

//路由的前置守卫
    router.beforeEach((to, from, next) => {
        if (to.meta.isAuth) {
            //    需要鉴权的
            loginPromise.then(() => {
                if (store.state.isLogin) {
                    next();
                } else {
                    next('/my/login')
                }
            })
        } else {
            next();
        }

        // next(false);
        // next('/index');
    })

export default
    router
