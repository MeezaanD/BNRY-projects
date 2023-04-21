<template>
    <section id="news">
        <h3>Latest News</h3>
        <div class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <form class="d-flex m-auto" role="search" @submit.prevent>
                <i class="bi bi-search" style="font-size: 2em;margin-right: 10px;"></i>
                 <input class="form-control w-100 me-2" style="border: 3px solid black;" type="search"
                    placeholder="Search by Author Name" aria-label="Search" v-model.trim="authorSearch">
            </form>
            </div>
        </div>

        <div v-for="article in filteredArticles" :key="article" class="container-fluid">
          <div class="row g-0">
            <div class="col-sm-4">
              <img :src="article.urlToImage" class="img-fluid" alt="">
            </div>
            <div class="col-sm-8 p-4" style="background: transparent;backdrop-filter: blur(25px);">
                <p class="text-end"><b> Published At: </b>{{ article.publishedAt }}</p>
                <h4>{{ article.title }}</h4>
                
                <h5><i class="bi bi-person-fill"></i>{{ article.author }}</h5>
                <br>
                <h6><b><i>{{ article.description}}</i></b></h6>
                <p class="content"><b></b>"{{ article.content }}"</p>
                <br>
                <a :href="article.url" target="_blank" class="learn-btn" style="align-items: start;">Read More</a>
            </div>
          </div>
        </div>

    </section>
</template>

<script>

import { computed, ref } from '@vue/runtime-core'
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore()
        store.dispatch("getArticles")
        const articles = computed(() => store.state.articles)
        const authorSearch = ref('')
        const filteredArticles = computed(() => {
          if (!authorSearch.value) {
            return articles.value
          }
          return articles.value.filter(article => 
            article.author.toLowerCase().includes(authorSearch.value.toLowerCase())
          )
        })
        return { filteredArticles, authorSearch }
    }
}
</script>

<style scoped>
#news {
    background-color: white;
    /* /*background: url("https://i.postimg.cc/28JSGRXS/test.jpg");/* */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    /* Make the image responsive */
    height: auto;
}

h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 50px;
    font-weight: 700;
    text-align: center;
    color: black;
}

h4 {
    font-family: 'Poppins', sans-serif;
    font-size: 27px;
    font-weight: 650;
    color: black;
}

h5 {
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    font-weight: 350;
    color: black;
}
.learn-btn {
  background-color: black;
  text-decoration: none;
  padding: 5px 35px 5px 35px;
  font-family: 'Dongle', sans-serif;
  font-size: 30px;
  color: white;
  border-radius: 10px;
  box-shadow: 0 5px 5px rgba(21, 48, 66, 0.5);

}
.content {
    font-family: 'Dongle', sans-serif;
    font-size: 24px;
    color: black;
}
.container-fluid {
  margin-top: 10px;
  padding: 40px;
}
.row {
  box-shadow: 0 20px 30px rgb(104, 104, 104);
}
img {
  height: 27rem;
  width: 100%;
}

</style>