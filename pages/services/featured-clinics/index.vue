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
      <SharedClinicsSection :items="featuredClinicsData" :displayHeader="false">
      </SharedClinicsSection>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FeaturedClinics',
  data() {
    return {
      featuredClinicsData: [
        {
          title: 'Lorem ipsum dolor sit amet',
          img_src: require('@/assets/images/home/featured-clinics/01.png'),
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          img_src: require('@/assets/images/home/featured-clinics/01.png'),
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          img_src: require('@/assets/images/home/featured-clinics/01.png'),
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          img_src: require('@/assets/images/home/featured-clinics/01.png'),
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          img_src: require('@/assets/images/home/featured-clinics/01.png'),
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          img_src: require('@/assets/images/home/featured-clinics/01.png'),
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          img_src: require('@/assets/images/home/featured-clinics/01.png'),
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          img_src: require('@/assets/images/home/featured-clinics/01.png'),
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          img_src: require('@/assets/images/home/featured-clinics/01.png'),
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          img_src: require('@/assets/images/home/featured-clinics/01.png'),
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          img_src: require('@/assets/images/home/featured-clinics/01.png'),
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          img_src: require('@/assets/images/home/featured-clinics/01.png'),
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
