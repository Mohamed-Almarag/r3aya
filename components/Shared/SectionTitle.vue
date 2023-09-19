<template>
  <div class="main_sections_title">
    <h2 class="title text-capitalize">
      <span>{{ title }}</span>
      <span v-if="withBullets" class="bullet_one"></span>
      <span v-if="withBullets" class="bullet_two"></span>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },
    withBullets: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.main_sections_title {
  .title {
    font-size: $title-font-size;
    width: fit-content;
    position: relative;
    .bullet_one {
      position: absolute;
      content: '';
      background-color: $second-color;
      width: 6px;
      height: 6px;
      bottom: -6px;
      right: -6px;
      border-radius: 50%;
    }
    .bullet_two {
      position: absolute;
      content: '';
      background-color: $main-color;
      width: 10px;
      height: 10px;
      bottom: -6px;
      right: -20px;
      border-radius: 50%;
    }
  }
  &.center_text {
    display: flex;
    justify-content: center;
  }
}
</style>
