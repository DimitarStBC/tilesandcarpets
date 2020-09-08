<template>
  <div id="app">
    <div class="logo">
      <router-link :to="{
            name: 'Landing'       
            }">
        <i class="fas fa-home"></i>
      </router-link>
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>

<style>
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background: rgb(168, 187, 224);
}
#app {
  position: relative;
  font-family: "Comfortaa", cursive;
}
.logo {
  width: 60px;
  position: absolute;
  z-index: 2;
  top: 20px;
  left: 50px;
}
.logo .fas {
  animation: vibrate;
  animation-duration: 3s;
  animation-iteration-count: infinite;

  font-size: 30px;
  color: rgb(168, 187, 224);
  border: 2px solid rgb(168, 187, 224);
  padding: 10px;
  border-radius: 50%;
}
* {
  overflow-x: hidden;
}
@keyframes vibrate {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
