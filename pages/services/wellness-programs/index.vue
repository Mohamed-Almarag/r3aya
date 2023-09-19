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
      <section class="wellness_programs">
        <SharedClinicsSection
          :items="wellnessProgramsData"
          :displayHeader="false"
          :changeGridToTwo="true"
        >
        </SharedClinicsSection>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'WellnessPrograms',
  data() {
    return {
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
.services_another_pages {
  .section_wrapper {
    position: relative;
    top: -90px;
  }
}
</style>
