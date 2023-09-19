<template>
  <div class="pages_padding_top doctor_profile_details">
    <div class="container">
      <div class="details_wrapper">
        <div class="row">
          <div class="col-md-8">
            <div class="all_doctor_information">
              <div class="doctor_img">
                <img
                  :src="doctor.img_src"
                  :alt="doctor.doctor_name"
                  class="d-block img"
                  draggable="false"
                />
              </div>
              <div class="doctor_info">
                <span class="name d-block text-capitalize">{{
                  doctor.doctor_name
                }}</span>
                <div class="salary_booking">
                  <SharedAppButton class="specialist">
                    <span>{{ doctor.btn_text }}</span>
                  </SharedAppButton>
                </div>
                <div class="main_rats_wrapper">
                  <b-form-rating
                    v-model="doctor.rate_value"
                    stars="4"
                    readonly
                  ></b-form-rating>
                </div>
                <div class="d-block main_doctor_prices">
                  <span>$</span>
                  <span>{{ doctor.salary }}</span>
                </div>
                <p class="doctor_description">
                  {{ doctor.description }}
                </p>
                <div class="learn_more">
                  <SharedAppButton class="solid">
                    <span>learn more about doctor</span>
                  </SharedAppButton>
                  <div class="all_certifications text-capitalize">
                    <span class="d-block certificate_title"
                      >certifications</span
                    >
                    <div class="doctor_certifications">
                      <div
                        class="every_certificate"
                        v-for="certificate in certifications"
                        :key="certificate.id"
                      >
                        <img
                          class="certificate_img d-block"
                          :src="certificate.img_src"
                          :alt="certificate.name"
                        />
                        <span class="d-block certificate_name">{{
                          certificate.name
                        }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="offer_dates col-md-4">
            <div class="dates_timing">
              <div class="main_date_picker_wrapper">
                <date-picker
                  :appendToBody="false"
                  :open="true"
                  format="MMM DD, YYYY"
                ></date-picker>
              </div>
              <div class="reservation_times">
                <b-form-group v-slot="{ ariaDescribedby }">
                  <b-form-radio-group
                    id="btn-radios-3"
                    v-model="selected"
                    :options="doctor.options"
                    :aria-describedby="ariaDescribedby"
                    name="radio-btn-stacked"
                    buttons
                    stacked
                  ></b-form-radio-group>
                </b-form-group>
              </div>
            </div>
            <div class="wrap_booking_btn">
              <SharedAppButton class="solid w_100">
                <span>book now {{ selected }}</span>
              </SharedAppButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DoctorDetails',
  data() {
    return {
      selected: null,
      doctor: {
        id: 1,
        img_src: require('@/assets/images/blogs/doctor-2.png'),
        doctor_name: 'mohamed alm3rag',
        btn_text: 'doctor specialist',
        rate_value: 4,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  Lorem ipsum dolor sit amet, ',
        salary: 360,
        options: [
          { text: '7:00 Am', value: '7:00 Am' },
          { text: '8:00 Am', value: '8:00 Am' },
          { text: '6:00 pm', value: '6:00 pm' },
        ],
      },
      certifications: [
        {
          id: 1,
          name: 'certifications name',
          img_src: require('@/assets/images/home/services/01.png'),
        },
        {
          id: 2,
          name: 'certifications name',
          img_src: require('@/assets/images/home/services/02.png'),
        },
        {
          id: 3,
          name: 'certifications name',
          img_src: require('@/assets/images/home/services/03.png'),
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.doctor_profile_details {
  .details_wrapper {
    padding: $main-padding 0;
  }
  .all_doctor_information {
    display: flex;
    gap: 10px;
    .doctor_img {
      .img {
        height: 180px;
        width: 180px;
        border-radius: 50%;
      }
    }
    .doctor_info {
      .salary_booking {
        margin: 20px 0 10px;
      }
      .doctor_description {
        margin: 20px 0;
        line-height: $line-height-text;
        font-size: 18px;
      }
      .main_doctor_prices {
        margin-top: 20px;
        border-radius: 5px;
        border: 2px solid $second-color;
        color: $second-color;
        width: fit-content;
        font-size: 17px;
        font-weight: 500;
        padding: 10px;
      }
    }
  }
  .all_certifications {
    margin-top: 30px;
    color: rgba(0, 0, 0, 0.64);
    .certificate_title {
      font-size: 18px;
    }
    .doctor_certifications {
      display: flex;
      margin-top: 15px;
      gap: 10px;
      .every_certificate {
        display: flex;
        gap: 5px;
        align-items: center;
        margin-bottom: 15px;
        .certificate_img {
          height: 55px;
          width: 52px;
        }
        .certificate_name {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
