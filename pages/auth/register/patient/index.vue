<template>
  <div class="main_auth_wrapper">
    <div class="main_form">
      <!-- Start Form  -->
      <form class="auth_form_wrapper">
        <div class="wrap_auth_title">
          <SharedSectionTitle
            class="register_text"
            title="start for free"
          ></SharedSectionTitle>
          <SharedSectionTitle title="sign up as patient."></SharedSectionTitle>
        </div>
        <div class="main_input_wrapper mb-4">
          <label class="main_label">first name</label>
          <input class="main_input" type="text" placeholder="name example" />
        </div>
        <div class="main_input_wrapper mb-4">
          <label class="main_label">last name</label>
          <input class="main_input" type="text" placeholder="name example" />
        </div>
        <div class="main_input_wrapper mb-4">
          <label class="main_label">e-mail</label>
          <input class="main_input" type="text" placeholder="user e-mail" />
        </div>
        <div class="main_input_wrapper mb-4">
          <label class="main_label">username</label>
          <input class="main_input" type="text" placeholder="example" />
        </div>
        <div class="main_input_wrapper mb-4">
          <label class="main_label">Gender</label>
          <!-- <input class="main_input" type="radio" value="male" /> -->
        </div>
        <div class="main_input_wrapper mb-4">
          <label class="main_label">country</label>
          <Multiselect
            :options="countries"
            track-by="country"
            label="country"
            placeholder="example"
          ></Multiselect>
        </div>
        <div class="main_input_wrapper mb-4">
          <label class="main_label">time zone</label>
          <Multiselect
            :options="countries"
            track-by="country"
            label="country"
            placeholder="example"
          ></Multiselect>
        </div>

        <div class="main_input_wrapper mb-4">
          <label class="main_label">phone</label>
          <input class="main_input" type="tel" placeholder="00122588963355" />
        </div>
        <div class="main_input_wrapper mb-4">
          <label class="main_label">age</label>
          <input class="main_input" type="text" placeholder="example" />
        </div>
        <div class="main_input_wrapper mb-4">
          <label class="main_label">password</label>
          <input class="main_input" type="password" />
        </div>
        <div class="main_input_wrapper mb-4">
          <label class="main_label">reset password</label>
          <input class="main_input" type="password" />
        </div>
        <div class="main_input_wrapper mb-4 with_check_box_wrapper">
          <input class="check_box_input" type="checkbox" />
          <nuxt-link
            class="form_link_item"
            :to="localePath('/terms-and-condition')"
            >agree to terms and conditions</nuxt-link
          >
        </div>
        <div class="button_wrapper">
          <SharedAppButton class="w_100">
            <span>register</span>
          </SharedAppButton>
        </div>
      </form>
      <!-- End Form  -->
      <!-- Start Auth Ask  -->
      <div class="auth_ask">
        <span class="ask_text">already have an account ?</span>
        <nuxt-link class="ask_link" :to="localePath('/auth/login')"
          >login</nuxt-link
        >
      </div>
      <!-- End Auth Ask  -->
    </div>
    <div class="auth_img_wrapper">
      <img
        draggable="false"
        src="@/assets/images/auth/register.png"
        alt="login img"
      />
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'
export default {
  name: 'RegisterPatient',
  data() {
    return {
      countries: [
        {
          id: 1,
          country: 'country A',
        },
        {
          id: 2,
          country: 'country B',
        },
        {
          id: 3,
          country: 'country C',
        },
      ],
    }
  },
  components: { Multiselect },
}
</script>

<style lang="scss" scoped></style>
