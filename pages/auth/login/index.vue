<template>
  <div class="main_auth_wrapper">
    <div class="main_form">
      <form class="auth_form_wrapper">
        <div class="wrap_auth_title">
          <SharedSectionTitle title="welcome back"></SharedSectionTitle>
        </div>
        <div class="main_input_wrapper mb-4">
          <label class="main_label">e-mail user or name or phone number</label>
          <input
            class="main_input"
            type="text"
            placeholder="e-mail user or name or phone number"
          />
        </div>
        <div class="main_input_wrapper mb-4">
          <label class="main_label">password</label>
          <input class="main_input" type="password" />
        </div>
        <div
          class="main_input_wrapper mb-4 with_check_box_wrapper and_switching_link"
        >
          <div class="link_check_aligned">
            <input class="check_box_input" type="checkbox" />
            <nuxt-link
              class="form_link_item normal_text_color"
              :to="localePath('/terms-and-condition')"
              >remember me</nuxt-link
            >
          </div>
          <div>
            <nuxt-link
              class="form_link_item normal_text_color decoration_link"
              :to="localePath('/terms-and-condition')"
            >
              forget password ?</nuxt-link
            >
          </div>
        </div>
        <div class="button_wrapper">
          <SharedAppButton class="w_100">
            <span>login</span>
          </SharedAppButton>
        </div>
      </form>
      <div class="continue_with">
        <span class="continue_text text-uppercase">or CONTINUE WITH</span>
      </div>
      <div class="login_social">
        <img
          class="social_img"
          src="@/assets/images/global/facebook-login.png"
          alt=""
        />
        <img
          class="social_img"
          src="@/assets/images/global/google-login.png"
          alt=""
        />
      </div>
      <!-- Start Auth Ask  -->
      <div class="auth_ask">
        <span class="ask_text">don’t have an account ?</span>
        <nuxt-link class="ask_link" :to="localePath('/register-type')"
          >register</nuxt-link
        >
      </div>
      <!-- End Auth Ask  -->
    </div>
    <div class="auth_img_wrapper">
      <img
        draggable="false"
        src="@/assets/images/auth/login.png"
        alt="login img"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<style lang="scss" scoped></style>
