import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/base.css'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false


import {
    Button,
    Icon,
    Swipe,
    SwipeItem,
    Tab,
    Tabs,
    Tabbar,
    TabbarItem,
    Search,
    List, Rate,
} from 'vant';
// import {Button} from 'vant';
import {Tag} from 'vant';

import {
    Cell,
    CellGroup,
    Field,
    Form,
    Image as VanImage,
    NavBar,
    RadioGroup,
    Radio, Toast, Uploader
} from 'vant';
import {Grid, GridItem} from 'vant';
Vue.use(Rate)
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Tag);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Search);
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
Vue.use(Uploader);
Vue.use(List);
Vue.use(Icon);
new Vue({
    router,
    render: h => h(App),
    store
}).$mount('#app')
