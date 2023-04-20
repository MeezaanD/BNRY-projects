import { createStore } from 'vuex'
import axios from 'axios'
const bnry = "https://newsapi.org/v2/everything?q=apple&from=2023-04-19&to=2023-04-19&sortBy=popularity&apiKey=452d05bf6c4d4555874a25c54fd797fa"

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
      const res = await axios.get(`${bnry}`)
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
