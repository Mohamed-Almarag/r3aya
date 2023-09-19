<template>
  <div class="pages_padding_top contact_us_wrapper">
    <div class="container">
      <div class="main_wrapper">
        <div class="row">
          <div class="col-md-6">
            <div class="info with_shadow">
              <div class="text-center">
                <img
                  src="@/assets/images/global/contact.png"
                  alt="contact"
                  class="frame"
                  draggable="false"
                />
              </div>
              <h5 class="contact_title centered text-capitalize mt-5 mb-5">
                you can contact us now directly at
              </h5>
              <div class="emails mb-5">
                <div class="part">
                  <svg class="icon">
                    <use xlink:href="~/static/sprite.svg#phone"></use>
                  </svg>
                  <span>0214324234</span>
                </div>
                <div class="part">
                  <svg class="icon">
                    <use xlink:href="~/static/sprite.svg#email"></use>
                  </svg>
                  <span>email@email.com</span>
                </div>
              </div>
              <h5 class="contact_title centered text-capitalize mb-5">
                you can also contact us via our social media
              </h5>
              <ul class="social_media list-unstyled">
                <li v-for="item in socials" :key="item.id">
                  <a href="#">
                    <img :src="item.img_src" alt="social" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="contact_form with_shadow">
              <h5 class="contact_title text-capitalize mb-4">
                contact us now !
              </h5>
              <form>
                <div class="main_input_wrapper mb-4">
                  <input
                    class="main_input"
                    type="text"
                    placeholder="add your name"
                  />
                </div>
                <div class="main_input_wrapper mb-4">
                  <input
                    class="main_input"
                    type="email"
                    placeholder="add your e-mail"
                  />
                </div>
                <div class="main_input_wrapper mb-4">
                  <input
                    class="main_input"
                    type="text"
                    placeholder="add your phone"
                  />
                </div>
                <div class="main_input_wrapper mb-4">
                  <textarea
                    class="main_input with_textarea"
                    placeholder="subject"
                  ></textarea>
                </div>
                <div class="button_wrapper">
                  <SharedAppButton>
                    <span>submit</span>
                  </SharedAppButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  data() {
    return {
      socials: [
        {
          id: 1,
          img_src: require('@/assets/images/global/facebook.png'),
        },
        {
          id: 2,
          img_src: require('@/assets/images/global/instagram.png'),
        },
        {
          id: 3,
          img_src: require('@/assets/images/global/twitter.png'),
        },
        {
          id: 4,
          img_src: require('@/assets/images/global/youtube.png'),
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.contact_us_wrapper {
  .main_wrapper {
    padding: $main-padding 0;
    .info {
      .emails {
        display: flex;
        justify-content: center;
        gap: 30px;
        .part {
          display: flex;
          gap: 5px;
          align-items: center;
          .icon {
            width: 14px;
            height: 14px;
            fill: $main-color;
          }
        }
      }
      .social_media {
        display: flex;
        justify-content: center;
        gap: 15px;
      }
    }
    .contact_form {
      .button_wrapper {
        display: flex;
        justify-content: end;
      }
    }
    .contact_title {
      font-size: 18px;
      &.centered {
        text-align: center;
      }
    }
    .with_shadow {
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      padding: 20px;
      min-height: 540px;
      &.info {
        padding: 20px 40px;
      }
    }
  }
}
</style>
