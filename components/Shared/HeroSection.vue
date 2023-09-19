<template>
  <div :class="['hero_section_container', `hero_section_container_${bgImage}`]">
    <div class="main_content" :class="{ in_about: isAboutPage }">
      <div :class="{ 'd-none': isAboutPage }">
        <slot name="title"></slot>
      </div>
      <div :class="{ 'd-none': isAboutPage }">
        <slot name="description"></slot>
      </div>
      <div v-if="withButtons">
        <slot name="buttons"></slot>
      </div>
      <div v-if="withSearch">
        <slot name="searchable"></slot>
      </div>
      <div v-if="isAboutPage">
        <slot name="aboutPage"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },
    description: {
      type: String,
      required: false,
      default: '',
    },
    withButtons: {
      type: Boolean,
      required: false,
      default: false,
    },
    withSearch: {
      type: Boolean,
      required: false,
      default: false,
    },
    isAboutPage: {
      type: Boolean,
      required: false,
      default: false,
    },
    bgImage: {
      type: String,
      required: false,
      default: 'defaultImage',
      validator: function (value) {
        return (
          ['default', 'screening', 'doctors', 'about_us'].indexOf(value) !== -1
        )
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.hero_section_container {
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 167, 147, 0.15);
    inset: 0;
  }
  background-image: url('@/assets/images/hero/default.png');

  &_screening {
    background-image: url('@/assets/images/hero/screening.png');
  }
  &_doctors {
    background-image: url('@/assets/images/hero/doctors.png');
  }
  &_about_us {
    background-color: $main-color;
    background-image: none;
    display: block;
    &::before {
      display: none;
    }
  }
  .main_content {
    position: relative;
    z-index: 7;
    text-align: center;
    &.in_about {
      text-align: initial;
    }
    .hero_title {
      text-transform: capitalize;
      margin-bottom: 25px;
      font-size: 42px;
      font-weight: 500;
    }
    .hero_description {
      font-size: 22px;
      margin-bottom: 25px;
      padding: 0 40px;
      line-height: $line-height-text;
    }
    .hero_buttons_wrapper {
      display: flex;
      gap: 20px;
      justify-content: center;
    }
  }
}
</style>
