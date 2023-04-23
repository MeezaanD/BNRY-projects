<template>
  <div class="container-fluid">
      <div class="row g-0" style="box-shadow: 0 20px 30px rgb(104, 104, 104);">
        <div class="col-sm-6">
          <img src="https://i.postimg.cc/R0t7yxFp/pexels-mikhail-nilov-6968122.jpg" alt="">
        </div>
        <div class="col-sm-6" >
          <h2>Subscribe to News news News for latest updates around the world</h2>
          <div class="info" style="padding: 30px 20px 30px 20px">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque obcaecati rem minus dolor, vitae repellendus asperiores blanditiis, deleniti laboriosam exercitationem laborum fugiat necessitatibus. Rerum sapiente, officiis velit libero a facere.</p>

              
              <form form @submit.prevent="subscribe"> 
              <div class="row g-3">
                  <div class="col">
                      <label for="First Name">First Name:</label>
                    <input type="text" class="form-control" required placeholder="John" aria-label="First name">
                  </div>
                  <div class="col">
                      <label for="First Name">Last Name:</label>
                    <input type="text" class="form-control" required placeholder="Doe" aria-label="Last name">
                  </div>
                </div>
            <br>

            <label for="First Name">Cell Number: </label>
            <div class="input-group mt-3 flex-nowrap">
              <span class="input-group-text" id="addon-wrapping"><i class="bi bi-telephone-fill"></i></span>
              <input type="number" class="form-control" required placeholder="021-345-6789" aria-label="Username" aria-describedby="addon-wrapping">
            </div>
            
            <br>

            <label for="First Name">Email Address:</label>
            <div class="input-group mt-3 flex-nowrap">
              <span class="input-group-text" id="addon-wrapping"><i class="bi bi-envelope-fill"></i></span>
              <input type="email" class="form-control" required placeholder="johndoe@gmail.com" aria-label="Username" aria-describedby="addon-wrapping">
            </div>

            <br>

            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">
                Keep me up-to-date with news around the world
              </label>
            </div>
            
            <br><br>
            <div class="container text-start">
              <div class="row align-items-start">
                <div class="col-sm-6">
                  <button type="submit" class="btn-1" style="align-items: start;">Subscribe Now</button>
                </div>
                <div class="col-sm-6">
                  <a href="/landing" class="btn-2">Skip For Now</a>
                </div>
              </div>
            </div>
          </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
      subscribe() {
          alert("Successfully subscribed to News news News");
          setTimeout(() => {
              this.$router.push('/landing');
          }, 2000);
      }
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

label {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 18px;
}

p {
  font-family: 'Dongle', sans-serif;
  font-size: 25px;
}

h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 50px;
    font-weight: 600;
    text-align: start;
    color: black;
    padding: 15px;
}

.container-fluid {
  margin-top: 30px;
  padding: 20px;
}

img {
  height: 50rem;
  width: 100%;
}

.btn-1 {
    background-color: black;
    padding: 5px 35px 5px 35px;
    font-family: 'Dongle', sans-serif;
    font-size: 30px;
    color: white;
    border-radius: 10px;
    box-shadow: 0 5px 5px rgba(21, 48, 66, 0.5);
  }

.btn-2 {
    text-decoration: none;
    padding: 20px;
    font-family: 'Dongle', sans-serif;
    font-size: 30px;
    color: black;
  }


</style>