<template>
  <div class="pages_padding_top doctors_page_wrapper">
    <SharedHeroSection bgImage="doctors">
      <template #title>
        <h3 class="hero_title">Lorem ipsum dolor sit amet</h3>
      </template>
      <template #description>
        <p class="hero_description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </template>
    </SharedHeroSection>
    <div class="container">
      <div class="switch_between_grids">
        <div class="switch_icons">
          <span class="choose_text text-capitalize">choose view type</span>
          <span class="main_switch" @click="switchBetweenGrids" v-if="gridOne">
            <svg class="icon">
              <use xlink:href="~/static/sprite.svg#list_view"></use>
            </svg>
            <svg class="icon dropdown_arrow">
              <use xlink:href="~/static/sprite.svg#dropdown_arrow"></use>
            </svg>
          </span>
          <span class="main_switch" @click="switchBetweenGrids" v-if="gridTwo">
            <svg class="icon">
              <use xlink:href="~/static/sprite.svg#grid_view"></use>
            </svg>
            <svg class="icon dropdown_arrow">
              <use xlink:href="~/static/sprite.svg#dropdown_arrow"></use>
            </svg>
          </span>
        </div>
      </div>
      <!-- Start View One For Doctors  -->
      <div class="all_doctors_view_one" v-if="gridOne">
        <div class="doctor_card" v-for="doctor in doctorsData" :key="doctor.id">
          <div class="row">
            <div class="col-md-8">
              <div class="all_doctor_information">
                <div class="doctor_img">
                  <nuxt-link :to="localePath(`/our-doctors/${doctor.id}`)">
                    <img
                      :src="doctor.img_src"
                      :alt="doctor.doctor_name"
                      class="d-block"
                    />
                  </nuxt-link>
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
                  <p class="doctor_description">
                    {{ doctor.description }}
                  </p>
                  <div class="d-block main_doctor_prices">
                    <span>$</span>
                    <span>{{ doctor.salary }}</span>
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
                <div class="reservation_times doctor">
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
                <SharedAppButton class="solid">
                  <span>book now {{ selected }}</span>
                </SharedAppButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End View One For Doctors  -->

      <!-- Start View Two For Doctors  -->
      <div class="all_doctors_view_two all_doctors_view_one" v-if="gridTwo">
        <div class="row">
          <div class="col-md-6" v-for="doctor in doctorsData" :key="doctor.id">
            <div class="doctor_card">
              <div class="all_doctor_information">
                <div class="doctor_img">
                  <nuxt-link :to="localePath(`/our-doctors/${doctor.id}`)">
                    <img
                      :src="doctor.img_src"
                      :alt="doctor.doctor_name"
                      class="d-block"
                    />
                  </nuxt-link>
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
                  <p class="doctor_description">
                    {{ doctor.description }}
                  </p>
                  <div class="main_booking_wrapper">
                    <div class="d-block main_doctor_prices">
                      <span>$</span>
                      <span>{{ doctor.salary }}</span>
                    </div>
                    <div>
                      <SharedAppButton class="solid">
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
      <!-- End View Two For Doctors  -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurDoctors',
  data() {
    return {
      selected: null,
      doctorsData: [
        {
          id: 1,
          img_src: require('@/assets/images/blogs/doctor-2.png'),
          doctor_name: 'mohamed alm3rag',
          btn_text: 'doctor specialist',
          rate_value: 4,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet,',
          salary: 360,
          options: [
            { text: '7:00 Am', value: '7:00 Am' },
            { text: '8:00 Am', value: '8:00 Am' },
            { text: '6:00 pm', value: '6:00 pm' },
          ],
        },
        {
          id: 2,
          img_src: require('@/assets/images/blogs/doctor-2.png'),
          doctor_name: 'mohamed samir',
          btn_text: 'doctor specialist',
          rate_value: 4,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet,',
          salary: 370,
        },
        {
          id: 3,
          img_src: require('@/assets/images/blogs/doctor-2.png'),
          doctor_name: 'mohamed alm3rag',
          btn_text: 'doctor specialist',
          rate_value: 4,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet,',
          salary: 360,
        },
      ],
      gridOne: true,
      gridTwo: false,
    }
  },
  methods: {
    switchBetweenGrids() {
      this.gridOne = !this.gridOne
      this.gridTwo = !this.gridTwo
    },
  },
}
</script>

<style lang="scss" scoped>
.doctors_page_wrapper {
  .switch_between_grids {
    display: flex;
    justify-content: end;
    align-items: center;
    padding-top: $main-padding;
    .switch_icons {
      display: flex;
      gap: 10px;
      align-items: center;
      .main_switch {
        border: 1px solid rgba(147, 147, 147, 1);
        padding: 5px;
        border-radius: 8px;
        cursor: pointer;
        user-select: none;
      }
      .icon {
        width: 18px;
        height: 18px;
        fill: $main-color;
        &.dropdown_arrow {
          width: 11px;
          height: 11px;
        }
      }
    }
  }
  .all_doctors_view_one {
    padding: $main-padding 0;
    .doctor_card {
      border-radius: 15px;
      padding: 15px;
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.33);
      margin-bottom: 40px;
      .all_doctor_information {
        display: flex;
        gap: 10px;
        .doctor_info {
          .salary_booking {
            margin: 20px 0;
          }
          .doctor_description {
            margin: 20px 0;
            line-height: $line-height-text;
            font-size: 18px;
          }
          .main_doctor_prices {
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
      .offer_dates {
        .dates_timing {
          display: flex;
        }
        .wrap_booking_btn {
          padding: 6px;
        }
      }
    }
  }
  .all_doctors_view_two {
    .main_booking_wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
