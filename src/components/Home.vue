<template>
    <section id="home">
        <div class="container">
          <h1>News News News</h1>
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
  background: url("https://i.postimg.cc/28JSGRXS/test.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  /* Make the image responsive */    
  min-height: 50vh;
}

h1 {
  position: absolute;
  width: 468px;
  height: 49px;
  left: 1080px;
  top: 30px;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: lighter; 
}
h3 {
  position: absolute;
  width: 468px;
  height: 49px;
  left: 1080px;
  top: 80px;
  font-family: 'Poppins', sans-serif;
  font-size: 50px; 
  font-weight: 700;
}

.btn {
  position: absolute;
  height: 49px;
  left: 1080px;
  top: 340px;
  background-color: black;
  padding: 10px 35px 50px 35px;
  font-family: 'Dongle', sans-serif;
  font-size: 30px;
  color: white;
  border-radius: 10px;
  border: 1px solid black;
  box-shadow: 0 5px 5px rgba(21, 48, 66, 0.5);
}

.btn:hover {
  color: white;
  border: 1px solid black;
  background-color: black;
}


@media (max-width: 768px) {
  h1 {
    width: auto;
    height: auto;
    font-size: 2rem;
    text-align: center;
    left: 50%;
    top: 15%;
    transform: translate(-50%, -50%);
  }

  h3 {
    width: auto;
    height: auto;
    font-size: 2rem;
    text-align: center;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
  }

  .btn {
    font-size: 2rem;
    text-align: center;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%);
  }
}
</style>