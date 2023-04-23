<template>
    <section id="home">
        <div class="container">
          <h1 class="title">NEWS News NEWS</h1>
          <h3>Discover the latest things happening in the world right now.</h3>
          <a href="#about" class="btn">Get started</a>
        </div>
    </section>
</template>
  
<script>
export default {};
</script>
  
<style scoped>
#home {
  background-image: url("https://i.postimg.cc/NFnscfCV/pexels-andrea-piacquadio-3760778.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 89vh;
}

.title {
  position: absolute;
  font-family: 'Rubik Wet Paint', cursive;
  font-size: 23px;
  font-weight: lighter;
  top: 160px;
  left: 100px;
  width: 468px;
  height: 49px;
}

h3 {
  position: absolute;
  font-family: 'Poppins', sans-serif;
  font-size: 50px;
  font-weight: 700;
  top: 200px;
  left: 100px;
  width: 468px;
  height: 49px;
}

.btn {
  position: absolute;
  font-family: 'Dongle', sans-serif;
  font-size: 30px;
  color: white;
  background-color: black;
  border-radius: 10px;
  border: 1px solid black;
  box-shadow: 0 5px 5px rgba(21, 48, 66, 0.5);
  padding: 10px 35px 50px 35px;
  top: 470px;
  left: 100px;
  height: 49px;
}

@media (max-width: 768px) {

  #home {
    background: white; /* change the background color to white */
    background-image: none; /* remove the background image */
    height: auto;
  }
  .title, h3, .btn {
    position: static;
    width: auto;
    height: auto;
    text-align: center;
    justify-content: center;
    color: black;
    
  }

  .title {
    font-size: 2rem;
    margin-top: 50px;
  }

  h3 {
    font-size: 2.5rem;
    margin-top: 20px;
  }

  .btn {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    padding: 5px 3px 5px 3px;
    color: white;
    border: 1px solid white;
    background-color: black;
  }
}
</style>