<template>
  <div class="pages_padding_top offer_details_page">
    <div class="container">
      <div class="offer_wrapper">
        <div class="row">
          <div class="col-md-6">
            <div class="offer_images">
              <div class="images_list">
                <img
                  v-for="img in imgsList"
                  :key="img.id"
                  class="d-block offer"
                  :src="img.img_src"
                  alt="offer"
                />
              </div>
              <div class="online_img">
                <img
                  class="d-block online"
                  src="@/assets/images/home/offers/online.png"
                  alt="online doctor"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="offers_content">
              <div class="content">
                <SharedSectionTitle
                  title="Lorem ipsum dolor sit amet"
                ></SharedSectionTitle>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </p>
                <div class="prices_time">
                  <span class="d-block salary">$ 100.0</span>
                  <span class="d-block time">00:26m:22sec</span>
                </div>
                <div class="doctor_details">
                  <img
                    src="@/assets/images/blogs/doctor-2.png"
                    alt="doctor"
                    class="d-block"
                  />
                  <div class="info">
                    <span class="name d-block text-capitalize"
                      >doctor name</span
                    >
                    <div class="salary_booking">
                      <SharedAppButton
                        class="specialist"
                        :isLink="true"
                        :toRoute="localePath(`/services`)"
                      >
                        <template #link>
                          <span>doctor specialist</span>
                        </template>
                      </SharedAppButton>
                    </div>
                  </div>
                </div>
              </div>
              <div class="offer_dates">
                <div class="main_date_picker_wrapper">
                  <date-picker
                    :appendToBody="false"
                    :open="true"
                    v-model="birth_date"
                    format="MMM DD, YYYY"
                  ></date-picker>
                </div>
                <div>
                  <SharedAppButton class="solid w_100">
                    <span>book now </span>
                  </SharedAppButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OfferDetails',
  data() {
    return {
      birth_date: null,
      imgsList: [
        {
          id: 1,
          img_src: require('@/assets/images/home/offers/offer2.png'),
        },
        {
          id: 2,
          img_src: require('@/assets/images/home/offers/offer2.png'),
        },
        {
          id: 3,
          img_src: require('@/assets/images/home/offers/offer2.png'),
        },
        {
          id: 4,
          img_src: require('@/assets/images/home/offers/offer2.png'),
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.offer_details_page {
  .offer_wrapper {
    padding: $main-padding 0;
    .offer_images {
      display: flex;
      gap: 10px;
      .images_list {
        .offer {
          width: 100%;
          margin-bottom: 10px;
        }
      }
      .online_img {
        .online {
          width: 100%;
        }
      }
    }
    .offers_content {
      display: flex;
      gap: 10px;
      .content {
        width: 60%;
        p {
          line-height: $line-height-text;
          margin: 30px 0;
        }
        .prices_time {
          color: $second-color;
          .salary {
            font-weight: bold;
          }
          .time {
            box-shadow: 0px 4px 4px 0px #00000040;
            font-weight: bold;
            text-align: center;
            padding: 10px;
            border-radius: 10px;
            margin: 20px 0;
            max-width: 80%;
          }
        }
        .doctor_details {
          display: flex;
          gap: 10px;
          align-items: center;
          font-size: 14px;
          .info {
            .name {
              margin-bottom: 10px;
            }
          }
        }
      }
      .offer_dates {
        width: 40%;
      }
    }
  }
}
</style>
