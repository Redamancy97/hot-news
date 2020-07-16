import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        articleId:[]
    },
    mutations: {
        setArticleId(state,payload){
            state.articleId=payload.articleId
        }
    },
    actions: {

    },
    modules: {

    }

})
