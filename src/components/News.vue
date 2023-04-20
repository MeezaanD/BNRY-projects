<template>
    <section id="news">
        <div class="container">
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
    min-height: 100vh;
    position: relative;
}
</style>