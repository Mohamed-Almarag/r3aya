<template>
  <div class="main_offers_list">
    <div class="container">
      <!-- Start Offers -->
      <div class="all_offers">
        <div class="section_header">
          <SharedSectionTitle
            v-if="offerTitle"
            :title="offerTitle"
          ></SharedSectionTitle>

          <template>
            <slot name="linkOrSelect"></slot>
          </template>
        </div>

        <div class="offers">
          <div class="row">
            <div class="col-md-4" v-for="offer in offers" :key="offer.id">
              <div class="every_offer">
                <div class="offer_img_wrapper">
                  <div class="wrap_sale_heart">
                    <span class="sale_discount">30%</span>
                    <svg class="icon">
                      <use xlink:href="~/static/sprite.svg#heart"></use>
                    </svg>
                  </div>

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
export default {
  name: 'OffersList',
  props: {
    offers: {
      type: Array,
      required: false,
    },
    offerTitle: {
      type: String,
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.main_offers_list {
  .section_header {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .all_offers {
    .offers {
      .every_offer {
        margin-bottom: 30px;
        .offer_img_wrapper {
          border-radius: 5px 5px 20px 20px;
          position: relative;

          overflow: hidden;
          .img {
            width: 100%;
          }
          .wrap_sale_heart {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            display: flex;
            justify-content: space-between;
            .icon {
              width: 33px;
              height: 33px;
              background-color: $main-color;
              fill: $white-color;
              padding: 7px;
              border-radius: 0 5px 0 5px;
            }
            .sale_discount {
              background-color: $second-color;
              color: $white-color;
              padding: 8px;
              border-radius: 5px 5px 5px 0;
            }
          }
        }
        .offer_content {
          padding-top: 10px;
          h5 {
            font-size: 17px;
          }
          p {
            line-height: $line-height-text;
            font-size: 16px;
            margin: 0;
          }
          .offer_rate_links {
            padding-top: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        }
      }
    }
  }
}
</style>
