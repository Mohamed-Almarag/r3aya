<template>
  <footer class="main_app_footer">
    <b-container>
      <b-row>
        <b-col sm="12" md="4" lg="3">
          <div class="part_one">
            <img
              src="@/assets/images/global/frame.png"
              alt="frame"
              draggable="false"
            />
            <p class="footer_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
            <span>&copy; 2020 — 2023</span>
          </div>
        </b-col>
        <b-col sm="12" md="4" lg="3">
          <div>
            <h6 class="footer_title text-capitalize">pages</h6>
            <ul class="list-unstyled links_list text-capitalize">
              <li>
                <nuxt-link class="link_item" :to="localePath('/')"
                  >home</nuxt-link
                >
              </li>
              <li>
                <nuxt-link class="link_item" :to="localePath('/about-us')"
                  >about us</nuxt-link
                >
              </li>
              <li>
                <nuxt-link class="link_item" :to="localePath('/our-doctors')"
                  >our doctors</nuxt-link
                >
              </li>
              <li>
                <nuxt-link class="link_item" :to="localePath('/services')"
                  >specialities</nuxt-link
                >
              </li>
              <li>
                <nuxt-link class="link_item" :to="localePath('/blogs')"
                  >blogs</nuxt-link
                >
              </li>
            </ul>
          </div>
        </b-col>
        <b-col sm="12" md="4" lg="3">
          <div>
            <h6 class="footer_title text-capitalize">want to be a doctor ?</h6>
            <ul class="list-unstyled links_list text-capitalize">
              <li>
                <nuxt-link class="link_item" :to="localePath('/register-type')"
                  >join us !</nuxt-link
                >
              </li>
            </ul>
          </div>
        </b-col>
        <b-col sm="12" md="4" lg="3">
          <div>
            <h6 class="footer_title text-capitalize">Need a help ?</h6>
            <ul class="list-unstyled links_list text-capitalize">
              <li>
                <nuxt-link class="link_item" :to="localePath('/contact-us')"
                  >contact us</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  class="link_item"
                  :to="localePath('/terms-and-condition')"
                  >terms and condition</nuxt-link
                >
              </li>
              <li>
                <nuxt-link class="link_item" :to="localePath('/privacy-policy')"
                  >privacy policy</nuxt-link
                >
              </li>
              <li>
                <nuxt-link class="link_item" :to="localePath('/faq')"
                  >FAQ</nuxt-link
                >
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style lang="scss" scoped>
.main_app_footer {
  padding: 2rem 0 4rem;
  background-color: $third-color;

  .footer_text {
    margin: 15px 0;
    line-height: $line-height-text;
  }
  .footer_title {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .links_list {
    .link_item {
      color: $black-color;
      margin-bottom: 15px;
      display: block;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
