<template>
  <div class="main_our_services_page pages_padding_top">
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
    <section class="clinics_section">
      <SharedClinicsSection
        :items="clinicsData"
        linkText="view more"
        titleText="our specialities"
        linkRoute="services/our-specialites"
      >
      </SharedClinicsSection>
    </section>
    <section class="wellness_programs">
      <SharedClinicsSection
        :items="wellnessProgramsData"
        linkText="see all"
        titleText="wellness programs"
        linkRoute="services/wellness-programs"
        :changeGridToTwo="true"
      >
      </SharedClinicsSection>
    </section>
    <section class="featured_clinics">
      <SharedClinicsSection
        :items="featuredClinicsData"
        linkText="see all"
        titleText="featured clinics"
        linkRoute="services/featured-clinics"
      >
      </SharedClinicsSection>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Services',
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
      featuredClinicsData: [
        {
          title: 'Lorem ipsum dolor sit amet',
          img_src: require('@/assets/images/our-services/010.png'),
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          img_src: require('@/assets/images/our-services/010.png'),
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          img_src: require('@/assets/images/our-services/010.png'),
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          img_src: require('@/assets/images/our-services/010.png'),
        },
      ],
      wellnessProgramsData: [
        {
          id: 1,
          title: 'Lorem ipsum dolor sit amet',
          description:
            'adipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod tempor',
          img_src: require('@/assets/images/our-services/09.png'),
        },
        {
          id: 2,
          title: 'Lorem ipsum dolor sit amet',
          description:
            'adipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod tempor',
          img_src: require('@/assets/images/our-services/09.png'),
        },
        {
          id: 3,
          title: 'Lorem ipsum dolor sit amet',
          description:
            'adipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod tempor',
          img_src: require('@/assets/images/our-services/09.png'),
        },
        {
          id: 4,
          title: 'Lorem ipsum dolor sit amet',
          description:
            'adipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod tempor',
          img_src: require('@/assets/images/our-services/09.png'),
        },
        {
          id: 5,
          title: 'Lorem ipsum dolor sit amet',
          description:
            'adipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod tempor',
          img_src: require('@/assets/images/our-services/09.png'),
        },
        {
          id: 6,
          title: 'Lorem ipsum dolor sit amet',
          description:
            'adipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod tempor',
          img_src: require('@/assets/images/our-services/09.png'),
        },
        {
          id: 7,
          title: 'Lorem ipsum dolor sit amet',
          description:
            'adipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod tempor',
          img_src: require('@/assets/images/our-services/09.png'),
        },
        {
          id: 8,
          title: 'Lorem ipsum dolor sit amet',
          description:
            'adipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing elit,sed do eiusmod tempor',
          img_src: require('@/assets/images/our-services/09.png'),
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.main_our_services_page {
  .featured_clinics,
  .clinics_section {
    padding: $main-padding 0;
  }
  .wellness_programs {
    background-color: rgba(196, 235, 230, 1);
    padding: 30px 0 10px;
    .section_header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
  }
}
</style>
