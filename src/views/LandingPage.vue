<template>
     <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="nav-item" style="text-decoration: none;color: black;font-family: 'Rubik Wet Paint', cursive;" href="#">NNN</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
                    <li class="nav-item">
                        <a class="nav-link" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#news">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="btn" href="#contact">Get in touch</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <Home></Home>
    <About></About>
    <News></News>
    <Contact></Contact>
</template>
<script>
import About from '@/components/About.vue';
import Contact from '@/components/Contact.vue';
import Home from '@/components/Home.vue';
import News from '@/components/News.vue';

export default {
    components: { Home, News, Contact, About }
}
</script>

<style scoped>
nav {
    width: 100%;
    padding: 15px;
    border: 2px solid rgba(255, 255, 255, 0.06);
    box-shadow: 0 5px 5px rgba(21, 48, 66, 0.5);
    backdrop-filter: blur(10px);
    height: auto;
    z-index: 1;
}

.nav-item {
    font-family: 'Dongle', sans-serif;
    font-size: 35px;
}

.btn {
    background-color: black;
    margin-left: 50px;
    margin-right: 30px;
    padding: 10px 35px 10px 35px;
    font-family: 'Dongle', sans-serif;
    font-size: 30px;
    color: white;
    border-radius: 10px;
}

.btn:hover {
    color: black;
    border: 2px solid black;
    background-color: white;
}

#home {
    min-height: 100vh;
    position: relative;
}

</style>