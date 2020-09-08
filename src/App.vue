<template>
  <div id="app">
    <div class="logo">
      <router-link :to="{
            name: 'Landing'       
            }">
        <img src="@/assets/logo.png" width="50" alt />
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
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
}
.logo {
  width: 50px;
  position: absolute;
  z-index: 2;
  top: 20px;
  left: 50px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
