<template>
  <div class="main_faq_wrapper">
    <div class="container">
      <!-- Start Slider  -->
      <div class="main_slider_wrapper" v-if="withSlider && sliderItems">
        <SharedSectionTitle title="our clients feedback"></SharedSectionTitle>
        <client-only>
          <VueSlickCarousel v-bind="settings">
            <div
              class="slider"
              v-for="(item, index) in sliderItems"
              :key="index"
            >
              <div class="main_slider_details">
                <div class="main_slider_content">
                  <span class="icon_wrapping">
                    <svg class="icon">
                      <use
                        xlink:href="~/static/sprite.svg#feedback_quotes"
                      ></use>
                    </svg>
                  </span>
                  <span class="icon_wrapping last_bottom">
                    <svg class="icon">
                      <use
                        xlink:href="~/static/sprite.svg#feedback_quotes_revert"
                      ></use>
                    </svg>
                  </span>
                  <p class="text">
                    {{ item.text }}
                  </p>
                  <span class="name text-capitalize d-block">{{
                    item.name
                  }}</span>
                </div>
              </div>
            </div>
          </VueSlickCarousel>
        </client-only>
      </div>
      <!-- End Slider  -->
      <!-- Start FAQ Questions Section  -->
      <div class="main_faq_section_wrapper">
        <h2 class="title">FAQ</h2>
        <!-- Start Accordion  -->
        <div class="accordion" role="tablist">
          <div v-for="item in items" v-bind:key="item.id">
            <b-card no-body class="">
              <b-card-header header-tag="header" role="tab">
                <b-button
                  class="tabs_button"
                  v-b-toggle="'accordion-' + item.id"
                  role="button"
                >
                  <svg class="plus_icon">
                    <use xlink:href="~/static/sprite.svg#plus_icon"></use>
                  </svg>
                  <span class="d-block">{{ item.text }}</span>
                </b-button>
              </b-card-header>
              <b-collapse
                accordion="my-accordion"
                role="tabpanel"
                :id="'accordion-' + item.id"
              >
                <b-card-body>
                  <b-card-text>{{ item.questions }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </div>
        <!-- End Accordion  -->
        <div class="d-flex justify-content-center mt-4" v-if="withButton">
          <SharedAppButton
            class="faq_more_questions"
            :isLink="true"
            :toRoute="localePath(`/faq`)"
          >
            <template #link>
              <span>view more</span>
            </template>
          </SharedAppButton>
        </div>
      </div>
      <!-- End FAQ Questions Section  -->
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'QuestionsSection',
  data() {
    return {
      settings: {
        arrows: false,
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        touchThreshold: 1,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
    }
  },
  components: { VueSlickCarousel },
  props: {
    items: {
      type: Array,
      required: false,
    },
    sliderItems: {
      type: Array,
      required: false,
    },
    withButton: {
      type: Boolean,
      default: true,
      required: false,
    },
    withSlider: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.main_faq_wrapper {
  .title {
    text-align: center;
    font-size: $title-font-size;
    margin-bottom: 1.5rem;
    line-height: $line-height-text;
  }
  .card {
    border: none;
    border-radius: 0;
  }
  .accordion {
    max-width: 70%;
    margin: auto;
    .card-header {
      padding: 0;
      border: none;
      .tabs_button {
        display: flex;
        align-items: center;
        font-size: 18px;
        line-height: $line-height-text;
        gap: 7px;
        width: 100%;
        border: none;
        border-radius: 0;
        box-shadow: none;
        background-color: $white-color;
        color: $black-color;
        .plus_icon {
          width: 30px;
          height: 30px;
          background-color: rgba(226, 245, 243, 1);
          fill: $main-color;
          padding: 8px;
          border-radius: 10px;
        }
      }
    }
  }
  // start slider style
  .main_slider_wrapper {
    padding: $main-padding 0;
    .slider {
      padding: 20px 10px;
      .main_slider_details {
        .main_slider_content {
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          text-align: center;
          padding: 45px 10px;
          border-radius: 10px;
          position: relative;
          cursor: grab;
          .text {
            font-size: 15px;
            line-height: 2;
            margin-bottom: 15px;
            color: rgba(0, 0, 0, 0.7);
          }
          .name {
            font-size: 18px;
          }
          .icon_wrapping {
            position: absolute;
            left: 0;
            top: 0;
            background-color: $main-color;
            border-radius: 10px 10px 10px 0;
            width: 46px;
            height: 46px;
            display: flex;
            align-items: center;
            justify-content: center;

            .icon {
              width: 17px;
              height: 17px;
              fill: $white-color;
            }
            &.last_bottom {
              right: 0;
              bottom: -23px;
              top: auto;
              left: auto;
              border-radius: 10px 0 10px 10px;
            }
          }
        }
      }
    }
  }
}
</style>
