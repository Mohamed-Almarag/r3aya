<template>
  <button
    class="main_app_button"
    v-if="!isLink"
    @click="handlerClick"
    :type="type"
  >
    <slot></slot>
  </button>
  <nuxt-link
    :to="toRoute"
    class="main_app_button"
    :class="{ with_link: isLink }"
    v-else
  >
    <slot name="link"></slot>
  </nuxt-link>
</template>

<script>
export default {
  name: 'AppButton',
  emits: ['click'],
  props: {
    isLink: {
      type: Boolean,
      default: false,
    },
    toRoute: {
      type: String,
    },
    type: {
      type: String,
      default: 'btn',
    },
  },
  methods: {
    handlerClick() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
.main_app_button {
  padding: 10px 25px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 5px;
  border: 1px solid $main-color;
  box-shadow: none;
  min-width: 120px;
  background-color: $main-color;
  color: $white-color;
  text-transform: capitalize;
  text-align: center;
  display: inline-block;
  &.change_width {
    width: 350px;
  }
  &.solid {
    background-color: $second-color;
    border-color: $second-color;
  }
  &.with_link {
    &:hover {
      text-decoration: none;
    }
  }
  &.hero_solid {
    background-color: $second-color;
    border-color: $second-color;
    width: 260px;
    padding: 15px 25px;
    font-size: 18px;
  }
  &.hero_border_solid {
    background-color: transparent;
    border: 2px solid $second-color;
    color: $second-color;
    width: 260px;
    padding: 15px 25px;
    font-size: 18px;
  }
  &.faq_more_questions {
    min-width: 220px;
  }
  &.blog_tag {
    border: 2px solid $main-color;
    color: $main-color;
    background-color: $white-color;
    &.active {
      background-color: $main-color;
      color: $white-color;
    }
  }
  &.w_100 {
    width: 100%;
  }
  &.specialist {
    background-color: $third-color;
    color: $main-color;
    padding: 8px;
    border-radius: 10px;
    border: none;
  }
  &.delete {
    background-color: $delete-color;
    border-color: $delete-color;
  }
  &.user_profile_icon {
    display: flex;
    align-items: center;
    gap: 5px;
    .icon {
      width: 15px;
      height: 15px;
      fill: $white-color;
    }
  }
}
</style>
