<template>
    <section id="news">
      <h3>Latest News</h3>
      <h4 class="text-center p-3">Checkout their work</h4>
      <div class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <form class="d-flex me-auto" role="search" @submit.prevent>
            <i class="bi bi-search" style="font-size: 2em;margin-right: 10px;"></i>
            <input class="form-control w-100 me-2" style="border: 3px solid black;" type="search" placeholder="Search Author's Name" aria-label="Search" v-model.trim="authorSearch"/>
          </form>
          <ul style="display: flex;list-style: none;gap: 5px;">
            <li>
                <button class="filter-btn" @click="sortByEarliest">Sort by Earliest</button>
            </li>
            <li>
                <button class="filter-btn" @click="sortByLatest">Sort by Latest</button>
            </li>
        </ul>
        </div>
      </div>
  <div v-for="article in sortedArticles" :key="article" class="container-fluid">
    <div class="row g-0">
      <div class="col-sm-4">
        <img :src="article.urlToImage" class="img-fluid" alt="" />
      </div>
      <div class="col-sm-8 p-4" style="background: transparent;backdrop-filter: blur(25px);">
        <p class="text-end"><i class="bi bi-calendar"></i><b> Published At: </b>{{ article.publishedAt }}</p>
        <h4>{{ article.title }}</h4>
        <h5><i class="bi bi-person-fill"></i>{{ article.author }}</h5>
        <br />
        <h6><b><i>{{ article.description }}</i></b></h6>
        <p class="content"><b></b>"{{ article.content }}"</p>
        <br />
        <a :href="article.url" target="_blank" class="learn-btn" style="align-items: start;">Read More</a>
      </div>
    </div>
  </div>
    </section>
    <section id="footer">
      <p class="footer-content">&copy;Copyright {{ thisYear }} | Designed By Meezaan Davids</p>
    </section>
  </template>

<script>
import { computed, ref } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    store.dispatch("getArticles");
    const articles = computed(() => store.state.articles);
    const authorSearch = ref("");
    const sortedArticles = computed(() => {
      let sorted = [...articles.value];
      sorted.sort((a, b) => {
        if (earliestFirst.value) {
          return new Date(a.publishedAt) - new Date(b.publishedAt);
        } else {
          return new Date(b.publishedAt) - new Date(a.publishedAt);
        }
      });
      return sorted.filter((article) =>
        article.author.toLowerCase().includes(authorSearch.value.toLowerCase())
      );
    });

    const earliestFirst = ref(true);

    const sortByEarliest = () => {
      earliestFirst.value = true;
    };

    const sortByLatest = () => {
      earliestFirst.value = false;
    };

    return { sortedArticles, authorSearch, sortByEarliest, sortByLatest };
  },

  data(){
	return {
		thisYear : new Date().getFullYear()
	}
  }
};
</script>

<style scoped>
#news {
    background-color: white;
    height: auto;
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

.filter-btn {
  background-color: black;
  text-decoration: none;
  padding: 10px 20px 10px 20px;
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

#footer {
  background-color: white;
  min-height: 10vh;
  padding: 0;
}

.footer-content {
text-align: center;
color: black;
box-shadow: 0 5px 5px rgba(21, 48, 66, 0.5);
padding: 30px;
font-family: 'Poppins', sans-serif;
font-size: 25px;
font-weight: 350;
}

</style>