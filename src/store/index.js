import { createStore } from 'vuex'
import axios from 'axios'
const BNRY = "https://bnry-backend.onrender.com"

export default createStore({
  state: {
    articles: null,
    message: null
  },
  getters: {
  },
  mutations: {
    setArticles(state, values) {
      state.articles = values
    }, 
    setMessage(state, message) {
      state.message = message
    }
  },
  actions: {
    async getArticles(context) {
      const res = await axios.get(`${BNRY}/news`)
      let { articles } = await res.data;
      if (articles) {
        context.commit('setArticles', articles)
      } else {
        context.commit('setMessage', err)
      }
    }
  },
  modules: {
  }
})