<template>
  <div class>
    <div class="boxes">
      <div class="leftImage d-flex flex-column justify-content-center align-items-center">
        <Navigation />
        <Testimonials />
      </div>
      <div class="FAQ">
        <div id="question-1" class="FAQq" v-on:click="Expand01()">
          <i id="plus-1" class="fas fa-angle-double-down"></i>
          <div>
            <h2>Цена за почистване</h2>
            <p id="question1More">2 лева на квадратен метър</p>
          </div>
        </div>

        <div id="question-2" class="FAQq" v-on:click="Expand02()">
          <i id="plus-2" class="fas fa-angle-double-down"></i>
          <div>
            <h2>За услугата</h2>
            <p
              id="question2More"
            >Представяме Ви нова услуга за ширините на гр. Бургас. Тя включва дълбоко машинно почистване на твърди настилки. Използваме специализирани препарати, които връщат блясъка на подовите настилки, възстановяват цвета на фугите. Третираме с finish продукт срещу повторно връщане на прах и мръсотия върху подовата настилка</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Testimonials from "../components/Testimonials.vue";
import Navigation from "../components/Navigation.vue";

var plus1rotated = true;
var plus2rotated = true;
export default {
  name: "Tiles",
  components: {
    Testimonials,
    Navigation,
  },

  methods: {
    Expand01: function () {
      $("#question1More").slideToggle("fast");
      if (plus1rotated) {
        $("#plus-1").css({
          transform: "rotate(" + -180 + "deg)",
        });
        plus1rotated = false;
      } else {
        $("#plus-1").css({
          transform: "rotate(" + 0 + "deg)",
        });
        plus1rotated = true;
      }
    },

    Expand02: function () {
      $("#question2More").slideToggle("fast");
      if (plus2rotated) {
        $("#plus-2").css({
          transform: "rotate(" + -180 + "deg)",
        });
        plus2rotated = false;
      } else {
        $("#plus-2").css({
          transform: "rotate(" + 0 + "deg)",
        });
        plus2rotated = true;
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
  /* justify-content: space-between; */
  align-items: center;
  border-bottom: 1px solid rgb(63, 63, 63);
  cursor: pointer;
}
.FAQq p {
  width: 80%;
}
.FAQq .fas {
  font-size: 25px;
  color: rgb(52, 152, 219);
  padding: 20px;
  transform-origin: center;
}
.FAQq:hover .fas {
  color: rgb(36, 109, 158);
  transition: 0.3s ease-in-out;
}
.marBox {
  margin: 20px 0;
}
#question1More {
  display: none;
}
#question2More {
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
    padding: 0 10px;
  }
  .FAQq .fas {
    display: none;
  }
  .FAQq {
    width: 90%;
    margin: auto;
  }
}
</style>