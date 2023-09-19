<template>
  <div class="pages_padding_top main_home_page_wrapper">
    <SharedHeroSection bgImage="default" :withButtons="true" :withSearch="true">
      <template #title>
        <h3 class="hero_title">Lorem ipsum dolor sit amet</h3>
      </template>
      <template #description>
        <div class="container">
          <p class="hero_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </template>
      <template #buttons>
        <h3 class="hero_buttons_wrapper">
          <SharedAppButton
            class="hero_solid"
            :isLink="true"
            :toRoute="localePath(`/services`)"
          >
            <template #link>
              <span>learn more</span>
            </template>
          </SharedAppButton>
          <SharedAppButton
            class="hero_border_solid"
            :isLink="true"
            :toRoute="localePath(`/services`)"
          >
            <template #link>
              <span>book your session now !</span>
            </template>
          </SharedAppButton>
        </h3>
      </template>
      <template #searchable>
        <div class="main_search_wrapper">
          <div class="container">
            <div class="search_container">
              <div class="searchable_parts" v-if="options">
                <svg class="icon">
                  <use xlink:href="~/static/sprite.svg#first_aid"></use>
                </svg>
                <!-- <client-only> -->
                <Multiselect
                  v-model="value"
                  :options="options"
                  placeholder="choose specialty"
                ></Multiselect>
                <!-- </client-only> -->
              </div>
              <div class="searchable_parts">
                <svg class="icon">
                  <use xlink:href="~/static/sprite.svg#search"></use>
                </svg>
                <input
                  class="main_input"
                  type="text"
                  placeholder="search by doctor name"
                />
              </div>
              <div class="button_wrapper">
                <SharedAppButton>
                  <span>search</span>
                </SharedAppButton>
              </div>
            </div>
          </div>
        </div>
      </template>
    </SharedHeroSection>

    <section class="featured_clinics">
      <ModulesHomeAboutUs></ModulesHomeAboutUs>
    </section>

    <ModulesHomeChooseUs></ModulesHomeChooseUs>

    <ModulesHomeOurServices></ModulesHomeOurServices>

    <section class="clinics_section">
      <SharedClinicsSection
        :items="clinicsData"
        linkText="view more"
        titleText="our clinics"
        linkRoute="faq"
        descriptionText="book form top specialties"
      >
      </SharedClinicsSection>
    </section>
    <section class="featured_clinics">
      <SharedClinicsSection
        :items="featuredClinicsData"
        linkText="see all"
        titleText="featured clinics"
        linkRoute="services/featured-clinics"
        :bulletTitle="true"
      >
      </SharedClinicsSection>
    </section>
    <!-- Start wellness programs -->
    <section class="wellness_programs_section">
      <div class="container">
        <div class="section_header">
          <SharedSectionTitle
            title="wellness programs"
            :withBullets="true"
          ></SharedSectionTitle>
          <SharedAppButton
            :isLink="true"
            :toRoute="localePath(`/services/wellness-programs`)"
          >
            <template #link>
              <span>see all</span>
            </template>
          </SharedAppButton>
        </div>
        <div class="wellness_items">
          <div class="row">
            <div
              class="col-md-4"
              v-for="item in wellnessPrograms"
              :key="item.id"
            >
              <div class="every_wellness">
                <div class="wellness_img_wrapper">
                  <img
                    class="wellness_img d-block"
                    :src="item.img_src"
                    :alt="item.title"
                    draggable="false"
                  />
                  <div class="content_wellness">
                    <p class="wellness_description">
                      {{ item.description }}
                    </p>
                  </div>
                </div>
                <span class="d-block wellness_title">{{ item.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End wellness programs -->
    <section>
      <ModulesOfferOffersList
        :offers="offers"
        offerTitle="Choose from top offers"
      >
        <template #linkOrSelect>
          <SharedAppButton
            :isLink="true"
            :toRoute="localePath(`/latest-offers`)"
          >
            <template #link>
              <span>see all</span>
            </template>
          </SharedAppButton>
        </template>
      </ModulesOfferOffersList>
    </section>
    <section class="faq_section">
      <ModulesFaqQuestionsSection
        :items="items"
        :withSlider="true"
        :sliderItems="sliderItems"
      ></ModulesFaqQuestionsSection>
    </section>
  </div>
</template>

<script>
// import Multiselect from 'vue-multiselect'
// import 'vue-multiselect/dist/vue-multiselect.min.css'
export default {
  name: 'IndexPage',
  data() {
    return {
      items: [
        {
          id: 1,
          text: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet ?',
          questions: 'questions',
        },
        {
          id: 2,
          text: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet ?',
          questions: 'questions2',
        },
        {
          id: 3,
          text: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet ?',
          questions: 'questions3',
        },
        {
          id: 4,
          text: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet ?',
          questions: 'questions3',
        },
        {
          id: 5,
          text: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet ?',
          questions: 'questions3',
        },
        {
          id: 6,
          text: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet ?',
          questions: 'questions3',
        },
      ],
      clinicsData: [
        {
          title: 'sychology',
          img_src: require('@/assets/images/home/clinics/01.png'),
        },
        {
          title: 'Neurology',
          img_src: require('@/assets/images/home/clinics/02.png'),
        },
        {
          title: 'internal Medicine ',
          img_src: require('@/assets/images/home/clinics/03.png'),
        },
        {
          title: 'Pediatric',
          img_src: require('@/assets/images/home/clinics/04.png'),
        },
      ],
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
      ],
      sliderItems: [
        {
          name: 'client name',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do',
        },
        {
          name: 'client name',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do',
        },
        {
          name: 'client name',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do',
        },
        {
          name: 'client name',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do',
        },
        {
          name: 'client name',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do',
        },
        {
          name: 'client name',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do',
        },
      ],
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
      ],
      options: ['list', 'of', 'options'],
      value: null,
      wellnessPrograms: [
        {
          id: 1,
          title: 'Lorem ipsum dolor sit amet',
          description:
            'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
          img_src: require('@/assets/images/home/clinics/05.png'),
        },
        {
          id: 2,
          title: 'Lorem ipsum dolor sit amet',
          description:
            'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
          img_src: require('@/assets/images/home/clinics/05.png'),
        },
        {
          id: 3,
          title: 'Lorem ipsum dolor sit amet',
          description:
            'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
          img_src: require('@/assets/images/home/clinics/05.png'),
        },
      ],
    }
  },
  // components: { Multiselect },
}
</script>

<style lang="scss" scoped>
.main_home_page_wrapper {
  .clinics_section {
    background-color: $bg-section;
    padding: 30px 0 10px;
  }
  .featured_clinics {
    padding: $main-padding 0;
  }
  .faq_section {
    padding-bottom: $main-padding;
  }
  .main_search_wrapper {
    .search_container {
      background-color: rgba(255, 255, 255, 0.8);
      box-shadow: 0px -3px 40px 0px rgba(0, 0, 0, 0.12);
      margin-top: 50px;
      padding: 30px 50px;
      border-radius: 20px;
      display: flex;
      justify-content: space-between;
      gap: 15px;

      .searchable_parts {
        display: flex;
        box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.25);
        align-items: center;
        background-color: rgba(246, 246, 246, 1);
        border-radius: 5px;
        padding: 5px 10px;
        flex-grow: 1;
        gap: 8px;
        .main_input {
          flex-grow: 1;
          border: none;
          outline: none;
          background: transparent;
        }
        .icon {
          width: 18px;
          height: 18px;
          fill: rgba(147, 147, 147, 1);
        }
      }
      .button_wrapper {
        // min-width: 170px;
      }
    }
  }
  .wellness_programs_section {
    padding-bottom: $main-padding;
    .section_header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    .wellness_items {
      .every_wellness {
        position: relative;
        .wellness_img_wrapper {
          position: relative;
          border-radius: 20px;
          // border: 1px solid;
          // background: #000;
          overflow: hidden;
          .wellness_img {
            width: 100%;
            border-radius: 20px;
          }
          .content_wellness {
            position: absolute;
            inset: 0;
            background: rgba(255, 255, 255, 0.4);
            display: none;
            align-items: center;
            text-align: center;
            padding: 20px;
            .wellness_description {
              margin: 0;
              line-height: $line-height-text;
              font-size: 18px;
            }
          }
        }
        .wellness_title {
          font-size: 18px;
          text-align: center;
          margin-top: 10px;

          // transition: all 2s ease-in-out;
          // &:hover {
          //   position: absolute;
          //   top: 20px;
          //   width: 100%;
          // }
        }
        // &:hover {
        //   .wellness_title {
        //     position: absolute;
        //     top: 20px;
        //     width: 100%;
        //   }
        // }
      }
    }
  }
}
</style>

<style lang="scss">
.main_home_page_wrapper {
  .multiselect {
    max-width: 100%;
    .multiselect__tags {
      background-color: transparent;
      max-width: 100%;
      border: none;
    }
    .multiselect__input,
    .multiselect__single {
      background-color: transparent;
    }
  }
}
</style>
