<template>
  <div class="services_another_pages pages_padding_top">
    <SharedHeroSection bgImage="default">
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
    <section class="section_wrapper">
      <SharedClinicsSection :items="clinicsData" :displayHeader="false">
      </SharedClinicsSection>
    </section>
  </div>
</template>

<script>
export default {
  name: 'OurSpecialites',
  data() {
    return {
      clinicsData: [
        {
          title: 'sychology',
          img_src: require('@/assets/images/our-services/01.png'),
        },
        {
          title: 'Neurology',
          img_src: require('@/assets/images/our-services/02.png'),
        },
        {
          title: 'internal Medicine ',
          img_src: require('@/assets/images/our-services/03.png'),
        },
        {
          title: 'Pediatric',
          img_src: require('@/assets/images/our-services/04.png'),
        },
        {
          title: 'Ophthalmology',
          img_src: require('@/assets/images/our-services/05.png'),
        },
        {
          title: 'ENT',
          img_src: require('@/assets/images/our-services/06.png'),
        },
        {
          title: 'dermatology',
          img_src: require('@/assets/images/our-services/07.png'),
        },
        {
          title: 'Obstetrics and gynaecology',
          img_src: require('@/assets/images/our-services/08.png'),
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.services_another_pages {
  .section_wrapper {
    position: relative;
    top: -90px;
  }
}
</style>
