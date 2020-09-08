<template>
  <div class="landingSplit">
    <div class="tile section">
      <div class="d-flex flex-column posBottom">
        <h1>Почистване на Гранитогрес, плочки</h1>
        <router-link
          class="btn btn-secondary"
          :to="{
            name: 'Tiles'       
            }"
        >Виж повече</router-link>
      </div>
    </div>

    <div class="parquet section">
      <div class="d-flex flex-column posBottom">
        <h1>Почистване на Ламинат, Паркет</h1>
        <router-link
          class="btn btn-secondary"
          :to="{
            name: 'Landing'       
            }"
        >Виж повече</router-link>
      </div>
    </div>
    <div class="carpet section">
      <div class="d-flex flex-column posBottom">
        <h1>Пране на мокети, килими и мека мебел</h1>
        <router-link
          class="btn btn-secondary"
          :to="{
            name: 'Landing'       
            }"
        >Виж повече</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tile {
  background: url("../assets/landing/tiles.jpg") rgb(73, 73, 73);
  background-position: center;
  background-size: cover;
  background-blend-mode: multiply;
}
.tile:hover {
  background: url("../assets/landing/tiles.jpg") rgb(124, 124, 124);
  background-position: center;
  background-size: cover;
  background-blend-mode: multiply;
}
.carpet {
  background: url("../assets/landing/carpet.jpg") rgb(73, 73, 73);
  background-position: center;
  background-size: cover;
  background-blend-mode: multiply;
}
.carpet:hover {
  background: url("../assets/landing/carpet.jpg") rgb(124, 124, 124);
  background-position: center;
  background-size: cover;
  background-blend-mode: multiply;
}
.parquet {
  background: url("../assets/landing/parquet.jpg") rgb(73, 73, 73);
  background-position: center;
  background-size: cover;
  background-blend-mode: multiply;
}
.parquet:hover {
  background: url("../assets/landing/parquet.jpg") rgb(124, 124, 124);
  background-position: center;
  background-size: cover;
  background-blend-mode: multiply;
}
.landingSplit {
  height: 100vh;
  display: flex;
}
.section {
  position: relative;
  color: rgb(167, 166, 166);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  transition: 0.3s ease-in-out;
}
.section:hover {
  flex: 2;
}
.section h1 {
  font-size: 25px;
  width: 100%;
}
.posBottom {
  width: 300px;
  position: absolute;
  bottom: 20vh;
}

@media only screen and (max-width: 1100px) {
  .landingSplit {
    flex-direction: column;
  }

  .posBottom {
    width: 220px;
    bottom: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>