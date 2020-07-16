import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/base.css'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false


import {Button,Icon,Swipe,SwipeItem,Tab,Tabs,Tabbar, TabbarItem,Search } from 'vant';

Vue.use(Button);
Vue.use(Icon);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Search);






new Vue({
    router,
    render: h => h(App),
    store
}).$mount('#app')
