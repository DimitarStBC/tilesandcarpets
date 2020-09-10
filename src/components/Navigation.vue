<template>
  <div>
    <div class="logo d-flex flex-row align-items-center">
      <i class="fas fa-level-down-alt"></i>
      <router-link :to="{
            name: 'Landing'       
            }">Върни се обратно</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style scoped>
.logo {
  position: absolute;
  top: 20px;
  left: 50px;
}
.logo a {
  color: white;
}
.logo .fas {
  transform: rotate(90deg);
  margin: 0 20px;
  transition: 0.2s ease-in-out;
}
.logo:hover .fas {
  color: rgb(168, 187, 224);
}
</style>