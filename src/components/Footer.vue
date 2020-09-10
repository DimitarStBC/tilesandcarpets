<template>
  <div class="mb-5">
    <h1 class="aboutBA d-flex justify-content-center align-items-center m-5">Contact Us</h1>
    <div class="d-flex justify-content-around row">
      <div class="w-300 fmm d-flex flex-column">
        <h3>Свежест 42</h3>
        <p>За повече свободно време, за по-дълъг живот на мебелите Ви, за по-здравословен живот. Нашите клиенти са наше семейство! Грижим се едни за други във всеки един момент!</p>
        <a href="https://www.facebook.com/svejest42">
          <i class="fab fa-facebook-square">Facebook</i>
        </a>
      </div>
      <div class="d-flex fmm flex-column">
        <div class="d-flex mt-2 flex-row align-items-center">
          <i class="fas m-2 fa-map-marker-alt"></i>
          <p>Бургас и околията</p>
        </div>
        <div class="d-flex mt-2 flex-row align-items-center">
          <i class="fas m-2 fa-phone-volume"></i>
          <a href="tel:+359889456119">0889 456 119</a>
        </div>
        <div class="d-flex mt-2 flex-row align-items-center">
          <i class="fas m-2 fa-file-contract"></i>
          <a class="aLinkColor" v-b-modal.activationLinkModal2>общи условия</a>
        </div>
        <div class="d-flex mt-2 flex-row align-items-center">
          <i class="fas m-2 fa-user-tie"></i>
          <a class="aLinkColor" v-b-modal.activationLinkModal>защита на личните данни</a>
        </div>
      </div>
      <div class="fmm">
        <b-form
          @submit="onSubmit"
          method="POST"
          data-netlify="true"
          netlify
          netlify-honeypot="bot-field"
          v-if="show"
          name="contactForm"
        >
          <input type="hidden" name="form-name" value="contactForm" />
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="Ние няма да споделим вашия имейл с никого!"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              name="email"
              type="email"
              required
              placeholder="Имейл"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input id="input-2" name="name" v-model="form.name" required placeholder="Име"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Subject:" label-for="input-3">
            <b-form-input
              id="input-3"
              name="subject"
              v-model="form.subject"
              required
              placeholder="Тема"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4" label="Message:" label-for="input-4">
            <b-form-textarea
              id="input-4"
              name="message"
              v-model="form.text"
              required
              placeholder="Съобщение"
            ></b-form-textarea>
          </b-form-group>

          <b-form-group>
            <div data-netlify-recaptcha="true"></div>
          </b-form-group>

          <b-button type="submit" variant="secondary">Изпрати</b-button>
        </b-form>
        <!-- <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ form }}</pre>
        </b-card>-->
      </div>
    </div>

    <!-- Svejest 42 information -->
    <b-modal
      ok-only
      size="xl"
      class="modal fade"
      id="activationLinkModal2"
      tabindex="-1"
      aria-hidden="true"
    >
      <div>
        <Uslovia />
      </div>
    </b-modal>
    <!-- Personal Privacy Protection -->
    <b-modal
      ok-only
      class="modal fade"
      size="lg"
      id="activationLinkModal"
      tabindex="-1"
      aria-hidden="true"
    >
      <div>
        <GDPR />
      </div>
    </b-modal>
  </div>
</template>

<script>
import Uslovia from "./OU";
import GDPR from "./GDPR";

export default {
  components: {
    Uslovia,
    GDPR,
  },
  data() {
    return {
      form: {
        email: "",
        name: "",
        subject: "",
        text: "",
      },

      show: true,
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    onSubmit() {
      fetch("/", {
        method: "post",
        headers: {
          "Content-Type": "application/x-www-urlencoded",
        },
        body: this.encode({
          "form-name": "contactForm",
          ...this.form,
        }),
      }).then();
    },
  },
};
</script>


<style scoped>
.aLinkColor {
  color: rgb(32, 96, 121);
}
.row {
  flex-direction: row;
}
#input-4 {
  height: 100px;
  resize: none;
}
.fas,
.fab {
  font-size: 25px;
  color: #3498db;
  transition: 0.2s ease-in-out;
}
.fas:hover,
.fab:hover {
  color: #226b9c;
}
.w-300 {
  width: 300px;
}
.aboutBA::before {
  margin-right: 5px;
  content: "";
  width: 50px;
  height: 2px;
  background: rgb(65, 65, 65);
  display: inline-block;
}
.aboutBA::after {
  margin-left: 5px;
  content: "";
  width: 50px;
  height: 2px;
  background: rgb(65, 65, 65);
  display: inline-block;
}

@media only screen and (max-width: 1100px) {
  .row {
    flex-direction: column;
    align-items: center;
  }
  .fmm {
    margin: 20px 0;
  }
  .aboutBA {
    font-size: 30px;
  }
  .aboutBA::before {
    display: none;
  }
  .aboutBA::after {
    display: none;
  }
}
</style>