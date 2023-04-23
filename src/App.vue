<template>
  <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dongle&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Rubik+Wet+Paint&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 18px; /* set the width */
}

/* track */
::-webkit-scrollbar-track {
  background: #f1f1f1; /* set the background color */
}

/* thumb */
::-webkit-scrollbar-thumb {
  background: black; /* set the color of the thumb */
  border-radius: 25px; /* round the corners */
}

/* hover state */
::-webkit-scrollbar-thumb:hover {
  background: #555; /* change the color on hover */
}


</style>
