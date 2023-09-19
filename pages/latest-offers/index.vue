<template>
  <div class="pages_padding_top lates_offers_page">
    <div class="container">
      <!-- Start Slider -->
      <div class="slider_wrapper">
        <client-only>
          <VueSlickCarousel v-bind="settings">
            <div class="slider" v-for="item in sliderImages" :key="item.id">
              <div class="main_slider_details">
                <img
                  class="talk_img"
                  draggable="false"
                  :src="item.img_src"
                  alt="offer"
                />
              </div>
            </div>
          </VueSlickCarousel>
        </client-only>
      </div>
      <!-- End Slider -->
      <div class="all_offers_wrapper">
        <ModulesOfferOffersList :offers="offers" offerTitle="Latest Offers">
          <template #linkOrSelect>
            <div class="latest_offers_select_wrapper">
              <Multiselect
                v-model="value"
                :options="categories"
                track-by="category"
                label="category"
                placeholder="choose category"
              ></Multiselect>
            </div>
          </template>
        </ModulesOfferOffersList>
      </div>
      <!-- Start Offers -->
      <div class="all_offers d-none">
        <div class="section_header">
          <SharedSectionTitle title="Latest Offers"></SharedSectionTitle>
        </div>

        <div class="offers">
          <div class="row">
            <div class="col-md-4" v-for="offer in offers" :key="offer.id">
              <div class="every_offer">
                <div class="offer_img_wrapper">
                  <img
                    class="img d-block"
                    :src="offer.img_src"
                    :alt="offer.title"
                    draggable="false"
                  />
                </div>
                <div class="offer_content">
                  <h5>{{ offer.title }}</h5>
                  <p>{{ offer.description }}</p>
                  <div class="offer_rate_links">
                    <div class="main_rats_wrapper">
                      <b-form-rating
                        v-model="offer.rate"
                        stars="4"
                        readonly
                      ></b-form-rating>
                    </div>
                    <SharedAppButton
                      class="solid"
                      :isLink="true"
                      :toRoute="localePath(`/latest-offers/${offer.id}`)"
                    >
                      <template #link>
                        <span>book now</span>
                      </template>
                    </SharedAppButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Offers -->
      </div>
      <!-- End Offers -->
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'
export default {
  name: 'LatestOffers',
  data() {
    return {
      offers: [
        {
          id: 1,
          title: 'Lorem ipsum dolor sit amet',
          description: 'adipiscing elit,sed do eiusmod tempor',
          rate: 4,
          discount: '30%',
          img_src: require('@/assets/images/home/offers/offer.png'),
        },
        {
          id: 2,
          title: 'Lorem ipsum dolor sit amet',
          description: 'adipiscing elit,sed do eiusmod tempor',
          rate: 4,
          discount: '30%',
          img_src: require('@/assets/images/home/offers/offer.png'),
        },
        {
          id: 3,
          title: 'Lorem ipsum dolor sit amet',
          description: 'adipiscing elit,sed do eiusmod tempor',
          rate: 4,
          discount: '30%',
          img_src: require('@/assets/images/home/offers/offer.png'),
        },
        {
          id: 4,
          title: 'Lorem ipsum dolor sit amet',
          description: 'adipiscing elit,sed do eiusmod tempor',
          rate: 4,
          discount: '30%',
          img_src: require('@/assets/images/home/offers/offer.png'),
        },
        {
          id: 5,
          title: 'Lorem ipsum dolor sit amet',
          description: 'adipiscing elit,sed do eiusmod tempor',
          rate: 4,
          discount: '30%',
          img_src: require('@/assets/images/home/offers/offer.png'),
        },
        {
          id: 6,
          title: 'Lorem ipsum dolor sit amet',
          description: 'adipiscing elit,sed do eiusmod tempor',
          rate: 4,
          discount: '30%',
          img_src: require('@/assets/images/home/offers/offer.png'),
        },
      ],
      sliderImages: [
        {
          id: 1,
          img_src: require('@/assets/images/home/offers/talk.png'),
        },
        {
          id: 2,
          img_src: require('@/assets/images/home/offers/talk.png'),
        },
        {
          id: 3,
          img_src: require('@/assets/images/home/offers/talk.png'),
        },
        {
          id: 4,
          img_src: require('@/assets/images/home/offers/talk.png'),
        },
        {
          id: 5,
          img_src: require('@/assets/images/home/offers/talk.png'),
        },
      ],
      settings: {
        arrows: false,
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchThreshold: 1,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
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
      categories: [
        {
          id: 1,
          category: 'category A',
        },
        {
          id: 2,
          category: 'category B',
        },
        {
          id: 3,
          category: 'category C',
        },
      ],
      value: null,
    }
  },
  components: { VueSlickCarousel, Multiselect },
}
</script>

<style lang="scss" scoped>
.lates_offers_page {
  .slider_wrapper {
    padding: $main-padding 0;
    .slider {
      padding: 10px;
    }
    .main_slider_details {
      border: 1px solid $main-color;
      border-radius: 20px;

      .talk_img {
        max-width: 100%;
      }
    }
  }
  .all_offers_wrapper {
    padding-bottom: $main-padding;
  }
}
</style>

<style lang="scss">
.lates_offers_page {
  .all_offers_wrapper {
    .latest_offers_select_wrapper {
      .multiselect {
        .multiselect__select {
          &::before {
            // border-color: $white-color;
            color: $white-color;
            border-color: $white-color transparent transparent;
          }
        }
        .multiselect__tags {
          background-color: $main-color;
          border: none;
        }
        .multiselect__placeholder {
          color: $white-color;
        }
        .multiselect__input,
        .multiselect__single {
          background-color: $main-color;
          color: $white-color;
        }
      }
    }
  }
}
</style>
