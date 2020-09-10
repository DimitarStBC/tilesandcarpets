<template>
  <div id="app">
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
