<template>
  <div class="screening_page_wrapper pages_padding_top">
    <SharedHeroSection bgImage="screening" :withButtons="true">
      <template #title>
        <h3 class="hero_title">Lorem ipsum dolor sit amet</h3>
      </template>
      <template #description>
        <p class="hero_description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </template>
      <template #buttons>
        <h3 class="hero_buttons_wrapper">
          <SharedAppButton
            class="hero_solid"
            :isLink="true"
            :toRoute="localePath(`/services`)"
          >
            <template #link>
              <span>try now for free</span>
            </template>
          </SharedAppButton>
        </h3>
      </template>
    </SharedHeroSection>
    <section class="screening_content">
      <div class="container">
        <SharedSectionTitle
          class="center_text"
          title="Lorem ipsum dolor sit amet"
        ></SharedSectionTitle>
        <p class="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem Lorem
          ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.Lorem Lorem ipsum dolor
          sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.Lorem Lorem ipsum dolor sit amet,
          consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.Lorem Lorem ipsum dolor sit amet, consectetur adipiscing
          elit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem Lorem
          ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.Lorem Lorem ipsum dolor
          sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.Lorem Lorem ipsum dolor sit amet,
          consectetur adipiscing elit
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Screening',
}
</script>

<style lang="scss" scoped>
.screening_page_wrapper {
  .screening_content {
    padding: $main-padding 0;
    .text {
      line-height: $line-height-text;
      font-size: 18px;
      margin: 20px 0 0;
      text-align: center;
    }
  }
}
</style>
