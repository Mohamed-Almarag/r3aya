<template>
  <div class="about_us_container">
    <div class="container">
      <div class="about_wrapper">
        <div class="content_wrapper">
          <SharedSectionTitle
            title="About Us"
            :withBullets="true"
          ></SharedSectionTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
          </p>

          <SharedAppButton
            class="solid"
            :isLink="true"
            :toRoute="localePath(`/about-us`)"
          >
            <template #link>
              <span>learn more</span>
            </template>
          </SharedAppButton>
        </div>
        <div class="imgs_wrapper">
          <div class="imgs mb-2">
            <img src="@/assets/images/home/about-us/1-1.png" alt="about us" />
            <img src="@/assets/images/home/about-us/2-1.png" alt="about us" />
          </div>
          <div class="imgs">
            <img src="@/assets/images/home/about-us/2-2.png" alt="about us" />
            <img src="@/assets/images/home/about-us/1-2.png" alt="about us" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
}
</script>

<style lang="scss" scoped>
.about_us_container {
  .about_wrapper {
    display: flex;
    justify-content: space-between;

    .content_wrapper {
      max-width: 65%;
      p {
        line-height: $line-height-text;
        font-size: 1rem;
        margin: 30px 0 20px;
        max-width: 95%;
      }
    }
    .imgs_wrapper {
      width: 35%;
      .imgs {
        // display: flex;
      }
    }
  }
}
</style>
