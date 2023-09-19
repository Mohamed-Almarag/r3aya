<template>
  <div class="main_activity_wrapper shared_user_profile_tabs">
    <b-tabs content-class="mt-3">
      <b-tab title="booking" active>
        <div class="every_tab_content">
          <SharedSectionTitle title="coming appointments"></SharedSectionTitle>
          <div class="all_cards_wrapper mt-4">
            <div class="row">
              <div class="col-md-3" v-for="item in cardsData" :key="item.id">
                <div class="every_card">
                  <div class="info">
                    <div class="img_wrapper">
                      <div class="wrap_svg_icon">
                        <svg class="icon">
                          <use
                            xlink:href="~/static/sprite.svg#empty_heart"
                          ></use>
                        </svg>
                      </div>
                      <img
                        :src="item.img_src"
                        :alt="item.doctor_name"
                        class="img"
                        draggable="false"
                      />
                    </div>
                    <div class="information">
                      <span class="d-block doctor_name text-capitalize">{{
                        item.doctor_name
                      }}</span>
                      <span class="d-block doctor_specialist text-capitalize">{{
                        item.doctor_specialist
                      }}</span>
                      <div class="main_rats_wrapper">
                        <b-form-rating
                          v-model="item.rate"
                          stars="4"
                          readonly
                        ></b-form-rating>
                      </div>
                    </div>
                  </div>
                  <p class="description">{{ item.text }}</p>
                  <div class="prices_and_btn">
                    <span class="price_dollar">$ {{ item.price }}</span>
                    <SharedAppButton
                      class="solid"
                      :isLink="true"
                      :toRoute="localePath(`/services`)"
                    >
                      <template #link>
                        <span>cancel booking</span>
                      </template>
                    </SharedAppButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-tab>
      <b-tab title="screening">
        <div class="every_tab_content">
          <SharedSectionTitle title="coming screenings"></SharedSectionTitle>
          <div>screening</div>
        </div>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  name: 'ActivityList',
  data() {
    return {
      cardsData: [
        {
          id: 1,
          img_src: require('@/assets/images/user/doctor-img.png'),
          doctor_name: 'doctor name',
          doctor_specialist: 'doctor specialist',
          rate: 4,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  TIME  KSA',
          btn_text: 'cancel booking',
          price: 300,
        },
        {
          id: 2,
          img_src: require('@/assets/images/user/doctor-img.png'),
          doctor_name: 'doctor name',
          doctor_specialist: 'doctor specialist',
          rate: 4,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  TIME  KSA',
          btn_text: 'cancel booking',
          price: 300,
        },
        {
          id: 3,
          img_src: require('@/assets/images/user/doctor-img.png'),
          doctor_name: 'doctor name',
          doctor_specialist: 'doctor specialist',
          rate: 4,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  TIME  KSA',
          btn_text: 'cancel booking',
          price: 300,
        },
        {
          id: 4,
          img_src: require('@/assets/images/user/doctor-img.png'),
          doctor_name: 'doctor name',
          doctor_specialist: 'doctor specialist',
          rate: 4,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  TIME  KSA',
          btn_text: 'cancel booking',
          price: 300,
        },
        {
          id: 5,
          img_src: require('@/assets/images/user/doctor-img.png'),
          doctor_name: 'doctor name',
          doctor_specialist: 'doctor specialist',
          rate: 4,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  TIME  KSA',
          btn_text: 'cancel booking',
          price: 300,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
