<template>
    <section id="about">
        <div class="container text-start">
            <div class="row align-items-start">
              <div class="col-sm-4">
                <img class="img-fluid" style="height: 48rem;width: 60rem;box-shadow: 0 5px 5px rgba(21, 48, 66, 0.5);" src="https://i.postimg.cc/KjGxdjfq/pexels-jumana-dakkur-4544455.jpg" alt="">
              </div>
              <div class="col-sm-8">
                <h3>What to expect from us ?</h3>
                <i class="bi bi-quote"></i><p>Welcome to News News News, your go-to source for the latest updates and breaking news from around the world. Our mission is to keep you informed and up-to-date on the most significant events and stories happening across the globe. <br><br>

                    At News News News, we believe that access to accurate and timely information is essential for making informed decisions and understanding the world around us. That's why our team of experienced journalists and correspondents work tirelessly to bring you the most reliable and objective news coverage possible. <br><br>
                    
                    Whether it's breaking news on politics, economics, technology, entertainment, sports, or anything else, we are committed to delivering the latest and most relevant information to our readers. We pride ourselves on our comprehensive and in-depth reporting, providing you with the context and analysis you need to fully understand the events shaping our world. <br><br>
                    
                    Our website is updated 24/7, ensuring that you never miss a beat. From local to global news, our coverage spans the entire spectrum, so you can stay informed on everything that matters to you. <br><br>
                    
                    Thank you for choosing News News News as your trusted source for the latest news from around the world. We hope you find our website informative, engaging, and useful.</p>
              </div>
            </div>
          </div>
          <br>
        <div class="container text-start">
            <div class="row align-items-start">
              <div class="col-sm-8">
                <h3>Our Established Authors</h3>
                <ul v-for="article in articles" :key="article">
                  <li>{{ article.author }}</li>
                </ul>
              </div>
              <div class="col-sm-4">
                <img class="img-fluid" style="height: 37rem;width: 90rem;box-shadow: 0 5px 5px rgba(21, 48, 66, 0.5);" src="https://i.postimg.cc/g2WdPYSf/lady.jpg" alt="">
              </div>
            </div>
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
#about {
    height: auto;
    margin-top: 10vh;
    margin-bottom: 10vh;
}

h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 50px; 
    font-weight: 700;
  }

h4 {
  font-family: 'Poppins', sans-serif;
  color: black;
  text-align: center;
}


p {
    font-family: 'Dongle', sans-serif;
    font-size: 26px;
    color: black;
    font-weight: 500;
}

li {
    font-family: 'Dongle', sans-serif;
    font-size: 25px;
    color: black;
    font-weight: 400;
}

</style>