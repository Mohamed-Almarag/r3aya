<template>
  <main>
    <SharedAppHeader></SharedAppHeader>
    <nuxt></nuxt>
    <SharedAppFooter></SharedAppFooter>
  </main>
</template>

<script>
// vue mixins
import Vue from 'vue'
import Mixsing from '~/mixins/mixin'
Vue.mixin(Mixsing)

export default {
  name: 'DefaultLayout',
  head() {
    return {
      htmlAttrs: {
        dir: this.$i18n.locale == 'en' ? 'ltr' : 'rtl',
        lang: this.$i18n.locale,
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
