<template>
  <b-carousel class="d-flex flex-column justify-content-around align-items-center" :interval="5000">
    <!-- Section heading -->

    <!--Slides-->
    <div class="carousel-inner" role="listbox">
      <!--First slide-->
      <div class="carousel-item active">
        <div class="testimonial">
          <!--Content-->
          <p>
            <i class="fas fa-quote-left"></i> Преди около месец ползвах почисъване на цял апартамент. Местих се в нова квартира и исках да се поизрине. Днес ми се обадиха да ме помолят за ревю и тъй като останах доволен им давам 5 звезди. Добре се справиха хората.
          </p>
          <h4 class="font-weight-bold">Добриел Добрев</h4>

          <!--Review-->
          <i class="fas fa-star blue-text"></i>
          <i class="fas fa-star blue-text"></i>
          <i class="fas fa-star blue-text"></i>
          <i class="fas fa-star blue-text"></i>
          <i class="fas fa-star blue-text"></i>
        </div>
      </div>
      <!--First slide-->
      <!--Second slide-->
      <div class="carousel-item">
        <div class="testimonial">
          <!--Content-->
          <p>
            <i class="fas fa-quote-left"></i> Преди няколко дни използвах услугите им при отварянето на магазина ми и останах много доволен. Работят коректно и бързо, което за мен беше изключително важно, поради кратките срокове , които имах до стартирането на обекта.
          </p>
          <h4 class="font-weight-bold">Георги Георгиев</h4>

          <!--Review-->
          <i class="fas fa-star blue-text"></i>
          <i class="fas fa-star blue-text"></i>
          <i class="fas fa-star blue-text"></i>
          <i class="fas fa-star blue-text"></i>
          <i class="fas fa-star blue-text"></i>
        </div>
      </div>
      <!--Second slide-->
      <div class="carousel-item">
        <div class="testimonial">
          <!--Content-->
          <p>
            <i class="fas fa-quote-left"></i> Аз съм много доволен от свършената работа. Пак ще работя с тях, препоръчвам ви!
          </p>
          <h4 class="font-weight-bold">Деян Тонев</h4>

          <!--Review-->
          <i class="fas fa-star blue-text"></i>
          <i class="fas fa-star blue-text"></i>
          <i class="fas fa-star blue-text"></i>
          <i class="fas fa-star blue-text"></i>
          <i class="fas fa-star blue-text"></i>
        </div>
      </div>
      <!--Third slide-->
      <div class="carousel-item">
        <div class="testimonial">
          <!--Content-->
          <p>
            <i class="fas fa-quote-left"></i> Много доволен в качеството и изпълнението на работата,
            Отлични цени, препоръчвам!
          </p>
          <h4 class="font-weight-bold">Станимир Стоянов</h4>

          <!--Review-->
          <i class="fas fa-star blue-text"></i>
          <i class="fas fa-star blue-text"></i>
          <i class="fas fa-star blue-text"></i>
          <i class="fas fa-star blue-text"></i>
          <i class="far fa-star blue-text"></i>
        </div>
      </div>
      <!--Third slide-->
    </div>
    <!--Slides-->
  </b-carousel>
  <!-- end -->
</template>

<style scoped>
.leftImage .fas {
  color: rgb(168, 187, 224);
}
.leftImage h4 {
  color: rgb(168, 187, 224);
}
</style>