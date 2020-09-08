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
            <i class="fas fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            eos
            id officiis hic tenetur quae quaerat ad velit ab. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Dolore cum accusamus eveniet molestias voluptatum inventore laboriosam labore
            sit, aspernatur praesentium iste impedit quidem dolor veniam.
          </p>
          <h4 class="font-weight-bold">Anna Deynah</h4>
          <h6 class="font-weight-bold my-3">Founder at ET Company</h6>
          <!--Review-->
          <i class="fas fa-star blue-text"></i>
          <i class="fas fa-star blue-text"></i>
          <i class="fas fa-star blue-text"></i>
          <i class="fas fa-star blue-text"></i>
          <i class="fas fa-star-half-alt blue-text"></i>
        </div>
      </div>
      <!--First slide-->
      <!--Second slide-->
      <div class="carousel-item">
        <div class="testimonial">
          <!--Content-->
          <p>
            <i class="fas fa-quote-left"></i> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
            odit
            aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
            non numquam eius modi tempora incidunt ut labore.
          </p>
          <h4 class="font-weight-bold">Maria Kate</h4>
          <h6 class="font-weight-bold my-3">Photographer at Studio LA</h6>
          <!--Review-->
          <i class="fas fa-star blue-text"></i>
          <i class="fas fa-star blue-text"></i>
          <i class="fas fa-star blue-text"></i>
          <i class="fas fa-star blue-text"></i>
          <i class="fas fa-star blue-text"></i>
        </div>
      </div>
      <!--Second slide-->
      <!--Third slide-->
      <div class="carousel-item">
        <div class="testimonial">
          <!--Content-->
          <p>
            <i class="fas fa-quote-left"></i> Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
            error sit voluptatem accusantium doloremque laudantium.
          </p>
          <h4 class="font-weight-bold">John Doe</h4>
          <h6 class="font-weight-bold my-3">Front-end Developer in NY</h6>
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