import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/base.css'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false


// import {Button} from 'vant';
import {Tabbar, TabbarItem} from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
// Vue.use(Button);


new Vue({
    router,
    render: h => h(App),
    store
}).$mount('#app')
