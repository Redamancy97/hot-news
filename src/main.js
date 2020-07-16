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
import {
    Button,
    Cell,
    CellGroup,
    Field,
    Form,
    Tabbar,
    TabbarItem,
    Image as VanImage,
    NavBar,
    RadioGroup,
    Radio, Toast, Uploader
} from 'vant';

Vue.use(Button);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Form);
Vue.use(Field);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(VanImage);
Vue.use(NavBar);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Toast);
Vue.use(Uploader)

new Vue({
    router,
    render: h => h(App),
    store
}).$mount('#app')
