<template>
  <div class="pages_padding_top about_us_page_wrapper">
    <SharedHeroSection bgImage="about_us" :isAboutPage="true">
      <template #aboutPage>
        <div class="container">
          <div class="about_hero_section">
            <div class="hero_content">
              <h3 class="about_hero_title">Lorem ipsum dolor sit amet</h3>
              <p class="about_hero_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div class="hero_img">
              <img src="@/assets/images/about/hero-1.png" alt="" />
              <img src="@/assets/images/about/hero-2.png" alt="" />
            </div>
          </div>
        </div>
      </template>
    </SharedHeroSection>
    <div class="container">
      <!-- Start Services -->
      <section class="about_services">
        <div class="service" v-for="item in servicesData" :key="item.id">
          <span class="icons">
            <img
              class="img"
              draggable="false"
              :src="item.img_src"
              alt="bullets"
            />
          </span>
          <h5 class="title text-capitalize">{{ item.title }}</h5>
          <p class="description">{{ item.text }}</p>
          <img
            class="bullets"
            draggable="false"
            :src="item.img_src2"
            alt="bullets"
          />
        </div>
      </section>
      <!-- End Services -->
      <!-- Start Know More -->
      <section class="know_more">
        <h5 class="know_title">know more about RE3AYA</h5>
        <img
          class="img_know_more"
          src="@/assets/images/about/video.png"
          alt="video"
        />
      </section>
      <!-- End Know More -->
      <!-- Start Choose Us -->
      <section class="why_choose_us">
        <SharedSectionTitle title="why choose us"></SharedSectionTitle>
        <div class="content_wrapper">
          <div class="img_wrapping">
            <img
              class="choose_img"
              src="@/assets/images/about/choose.png"
              draggable="false"
              alt="choose us"
            />
          </div>
          <div class="main_content">
            <SharedSectionTitle
              title="Lorem ipsum dolor sit ametLorem ipsum dolor sit amet"
            ></SharedSectionTitle>
            <ul class="list-unstyled content_list">
              <li class="every_list">
                <img
                  src="@/assets/images/about/play.png"
                  draggable="false"
                  alt="icon"
                />
                <span>Lorem ipsum dolor sit amet</span>
              </li>
              <li class="every_list">
                <img
                  src="@/assets/images/about/play.png"
                  draggable="false"
                  alt="icon"
                />
                <span>Lorem ipsum dolor sit amet</span>
              </li>
              <li class="every_list">
                <img
                  src="@/assets/images/about/play.png"
                  draggable="false"
                  alt="icon"
                />
                <span>Lorem ipsum dolor sit amet</span>
              </li>
              <li class="every_list">
                <img
                  src="@/assets/images/about/play.png"
                  draggable="false"
                  alt="icon"
                />
                <span>Lorem ipsum dolor sit amet</span>
              </li>
              <li class="every_list">
                <img
                  src="@/assets/images/about/play.png"
                  draggable="false"
                  alt="icon"
                />
                <span>Lorem ipsum dolor sit amet</span>
              </li>
              <li class="every_list">
                <img
                  src="@/assets/images/about/play.png"
                  draggable="false"
                  alt="icon"
                />
                <span>Lorem ipsum dolor sit amet</span>
              </li>
              <li class="every_list">
                <img
                  src="@/assets/images/about/play.png"
                  draggable="false"
                  alt="icon"
                />
                <span>Lorem ipsum dolor sit amet</span>
              </li>
              <li class="every_list">
                <img
                  src="@/assets/images/about/play.png"
                  draggable="false"
                  alt="icon"
                />
                <span>Lorem ipsum dolor sit amet</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!-- End Choose Us -->
      <!-- Start Videos -->
      <section class="wrap_video_two">
        <div class="wrap_titles">
          <h5 class="title_two">Lorem ipsum dolor sit amet</h5>
          <img
            class="icon"
            draggable="false"
            src="@/assets/images/about/arrow.png"
            alt="video"
          />
        </div>
        <div class="video_two">
          <img
            draggable="false"
            class="video_two_img"
            src="@/assets/images/about/video2.png"
            alt="video"
          />
        </div>
      </section>
      <!-- End Videos -->
    </div>
    <!-- Start Guide -->
    <section class="website_guide">
      <div class="container">
        <SharedSectionTitle title="your guide to website"></SharedSectionTitle>
        <div class="list_of_guides">
          <img
            class="img_doctor_guide"
            src="@/assets/images/about/img.png"
            alt="doctor guide"
          />
          <ul class="guides list-unstyled">
            <li
              v-for="(item, index) in guideData"
              :key="item.id"
              :class="['every_guide', `every_guide_${index + 1}`]"
            >
              <span class="bullet">{{ index + 1 }}</span>
              <span class="text">{{ item.text }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- End Guide -->
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
export default {
  name: 'AboutUs',
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
      servicesData: [
        {
          id: 1,
          title: 'our vision',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem',
          img_src: require('@/assets/images/about/01.png'),
          img_src2: require('@/assets/images/about/04.png'),
        },
        {
          id: 2,
          title: 'our mission',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem',
          img_src: require('@/assets/images/about/02.png'),
          img_src2: require('@/assets/images/about/04.png'),
        },
        {
          id: 3,
          title: 'our values',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem',
          img_src: require('@/assets/images/about/03.png'),
          img_src2: require('@/assets/images/about/04.png'),
        },
      ],
      guideData: [
        {
          id: 1,
          text: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit amet',
        },
        {
          id: 2,
          text: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet',
        },
        {
          id: 3,
          text: 'Lorem ipsum dolor sit amet',
        },
        {
          id: 4,
          text: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit amet',
        },
        {
          id: 5,
          text: 'Lorem ipsum dolor sit amet',
        },
        {
          id: 6,
          text: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.about_us_page_wrapper {
  .about_hero_section {
    padding-top: $main-padding;
    display: flex;
    justify-content: space-between;
    .hero_content {
      width: 40%;
      .about_hero_title {
        text-transform: capitalize;
        margin-bottom: 25px;
        font-size: 30px;
        font-weight: 500;
        color: $white-color;
      }
      .about_hero_description {
        font-size: 22px;
        margin: 0;
        color: $white-color;
        line-height: $line-height-text;
      }
    }
  }
  .about_services {
    padding: $main-padding 0;
    margin-top: $main-padding;
    display: flex;
    justify-content: space-between;
    .service {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background-color: rgba(195, 28, 38, 0.6);
      color: $white-color;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      text-align: center;
      padding: 40px;
      position: relative;
      .title {
        width: 100%;
        font-size: 18px;
        margin: 0;
      }
      .description {
        width: 100%;
        line-height: $line-height-text;
        font-size: 16px;
        margin: 0;
      }
      .bullets {
        position: absolute;
        right: 0;
        bottom: -15px;
      }
      .icons {
        position: absolute;
        left: 0;
        top: -65px;
        background-color: rgba(195, 28, 38, 0.3);
        width: 120px;
        height: 120px;
        border-radius: 50%;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .know_more {
    .know_title {
      text-align: center;
      margin-bottom: 30px;
    }
    .img_know_more {
      max-width: 100%;
    }
  }
  .why_choose_us {
    padding: $main-padding 0;
    .content_wrapper {
      margin-top: 30px;
      display: flex;
      gap: 20px;
      padding: 30px 0;
      position: relative;
      &::before {
        background: rgba(196, 235, 230, 1);
        content: '';
        top: 0;
        right: 0;
        width: 80%;
        position: absolute;
        height: 100%;
        z-index: -1;
        border-radius: 20px;
      }

      .content_list {
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
        .every_list {
          display: flex;
          gap: 10px;
          min-width: 50%;
          margin-bottom: 20px;
          img {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
  .wrap_video_two {
    display: flex;
    gap: 10px;
    padding-bottom: $main-padding;
    .wrap_titles {
      display: flex;
      gap: 10px;
      align-items: center;
      .title_two {
        font-size: 22px;
        line-height: $line-height-text;
      }
    }
  }
  .website_guide {
    padding: $main-padding 0;
    background-color: rgba(196, 235, 230, 1);
    .list_of_guides {
      display: flex;
      margin-top: 30px;
      .img_doctor_guide {
        max-height: 330px;
      }
      .guides {
        margin-bottom: 0;
        .every_guide {
          display: flex;
          gap: 10px;
          margin-bottom: 25px;
          align-items: center;
          .bullet {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: $main-color;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            color: $white-color;
            padding: 4px;
          }
          &_2,
          &_5 {
            margin-left: 35px;
          }
          &_3 {
            margin-left: 70px;
          }
          &_4 {
            margin-left: 105px;
          }
        }
      }
    }
  }
  .faq_section {
    padding-bottom: $main-padding;
  }
}
</style>
