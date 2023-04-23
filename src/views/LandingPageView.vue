<template>
 
    <NavbarComponent></NavbarComponent>
    <HomeComponent></HomeComponent>
    <AboutComponent></AboutComponent>
    <NewsComponent></NewsComponent>
</template>

<script>

import NavbarComponent from '@/components/NavbarComponent.vue';
import AboutComponent from '@/components/AboutComponent.vue';
import HomeComponent from '@/components/HomeComponent.vue';
import NewsComponent from '@/components/NewsComponent.vue';

export default {
    components: { NavbarComponent, HomeComponent, AboutComponent, NewsComponent }
}
</script>

<style scoped>



</style>