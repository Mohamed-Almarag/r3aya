<template>
  <div class="wellness_programs_details pages_padding_top">
    <section class="part_one">
      <div class="container">
        <div class="wrapper_content">
          <div class="one">
            <h5 class="item_title">Lorem ipsum dolor sit amet</h5>
            <p class="item_description">
              adipiscing elit,sed do eiusmod temporadipiscing elit,sed do
              eiusmod temporadipiscing elit,sed do eiusmod temporadipiscing
              elit,sed do eiusmod temporadipiscing elit,sed do eiusmod
              temporadipiscing elit,sed do eiusmod tempor
            </p>
          </div>

          <div class="two">
            <img src="@/assets/images/our-services/09.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="screening_content">
      <div class="container">
        <SharedSectionTitle
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
  name: 'WellnessProgramsDetails',
}
</script>

<style lang="scss" scoped>
.wellness_programs_details {
  .part_one {
    background-color: rgba(196, 235, 230, 1);
    .wrapper_content {
      min-height: 450px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .item_title {
        font-size: 18px;
      }
      .item_description {
        font-size: 14px;
        line-height: $line-height-text;
        margin: 10px 0 0;
        max-width: 80%;
        width: 100%;
      }
    }
  }
  .screening_content {
    padding: $main-padding 0;
    .text {
      line-height: $line-height-text;
      font-size: 18px;
      margin: 20px 0 0;
    }
  }
}
</style>
