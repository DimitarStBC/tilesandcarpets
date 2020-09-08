<template>
  <div class>
    <div class="boxes">
      <div class="leftImage d-flex flex-column justify-content-around align-items-center">
        <!-- corousel testimonials -->
        <Testimonials />
      </div>
      <div class="FAQ">
        <div id="question-1" class="FAQq" v-on:click="Expand01()">
          <div>
            <h2>Цена за почистване</h2>
            <p id="question1More">1 лев и 20 стотинки на квадратен метър</p>
          </div>
          <i id="plus-1" class="fas fa-plus"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Testimonials from "../components/Testimonials.vue";

var plus1rotated = true;
export default {
  name: "Carpet",
  components: {
    Testimonials,
  },

  methods: {
    Expand01: function () {
      $("#question1More").slideToggle("fast");
      if (plus1rotated) {
        $("#plus-1").css({
          transform: "rotate(" + 45 + "deg)",
        });
        plus1rotated = false;
      } else {
        $("#plus-1").css({
          transform: "rotate(" + -90 + "deg)",
        });
        plus1rotated = true;
      }
    },
  },
};
</script>

<style scoped>
.boxes {
  width: 100%;
  display: flex;
  flex-direction: row;

  align-items: center;
}

.leftImage {
  padding: 20px;
  width: 30%;
  background-color: rgb(63, 63, 63);
  color: white;
  border-bottom-right-radius: 20px;
  height: 700px;
}
.leftImage img {
  width: 100%;
  border-radius: 10px;
}

.FAQ {
  padding: 0 20px;
  width: 50%;
  color: rgb(63, 63, 63);
}

.FAQ h2 {
  margin: 10px 0;
  padding: 10px;
}
.FAQ p {
  color: rgb(63, 63, 63);
  padding: 10px;
}
.FAQq {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(63, 63, 63);
  cursor: pointer;
}
.FAQq .fas {
  font-size: 25px;
}
.FAQq:hover .fas {
  color: rgb(122, 122, 122);
  transition: 0.3s ease-in-out;
}
.marBox {
  margin: 20px 0;
}
#question1More {
  display: none;
}

@media only screen and (max-width: 1100px) {
  .boxes {
    flex-direction: column;
  }
  .leftImage {
    width: 90%;
    padding: 10px;
    height: 500px;
  }
  .FAQ {
    width: 100%;
  }
  .FAQq {
    width: 100%;
  }
  .FAQq .fas {
    font-size: 25px;
  }
}
</style>