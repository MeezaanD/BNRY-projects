<template>
    <section id="news">
        <div class="container">
            <h3>Latest News</h3>
            <!-- <div v-for="article in articles" :key="article" class="card">
                <h3> {{ article.title }} </h3>
                <img src="" alt="">
                <p></p>
            </div> -->
        </div>
    </section>
</template>

<script>

import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore()
        store.dispatch("getArticles")
        const articles = computed(() => store.state.articles)
        return { articles }
    },
}
</script>

<style scoped>
#news {
    background: url("https://i.postimg.cc/28JSGRXS/test.jpg");
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
  }
</style>