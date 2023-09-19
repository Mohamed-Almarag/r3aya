<template>
  <div class="choose_us_wrapper">
    <div class="container">
      <SharedSectionTitle
        title="why choose us"
        :withBullets="true"
      ></SharedSectionTitle>
      <div class="tabs_wrapper">
        <b-tabs content-class="mt-3">
          <b-tab title="Lorem ipsum dolor sit amet" active>
            <div class="every_tab_content">
              <div class="content">
                <h5>Lorem ipsum dolor sit amet</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede tellus. Aenean leo
                </p>
              </div>
              <div class="image">
                <img src="@/assets/images/home/about-us/choose.png" alt="img" />
              </div>
            </div>
          </b-tab>
          <b-tab title="Lorem ipsum dolor sit amet"
            ><div class="every_tab_content">
              <div class="content">
                <h5>Lorem ipsum dolor sit amet</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede tellus. Aenean leo
                </p>
              </div>
              <div class="image">
                <img src="@/assets/images/home/about-us/choose.png" alt="img" />
              </div></div
          ></b-tab>
          <b-tab title="Lorem ipsum dolor sit amet"
            ><div class="every_tab_content">
              <div class="content">
                <h5>Lorem ipsum dolor sit amet</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede tellus. Aenean leo
                </p>
              </div>
              <div class="image">
                <img src="@/assets/images/home/about-us/choose.png" alt="img" />
              </div></div
          ></b-tab>
          <b-tab title="Lorem ipsum dolor sit amet"
            ><div class="every_tab_content">
              <div class="content">
                <h5>Lorem ipsum dolor sit amet</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede tellus. Aenean leo
                </p>
              </div>
              <div class="image">
                <img src="@/assets/images/home/about-us/choose.png" alt="img" />
              </div></div
          ></b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChooseUs',
}
</script>

<style lang="scss" scoped>
.choose_us_wrapper {
  background-color: $bg-section;
  padding: 30px 0;
  .every_tab_content {
    display: flex;
    gap: 10px;
    h5 {
      margin: 0 0 15px 0;
      font-size: 1.2rem;
    }
    p {
      line-height: $line-height-text;
      font-size: 1rem;
      margin: 0;
    }
  }
}
</style>
<style lang="scss">
.choose_us_wrapper {
  .nav-tabs {
    border: none;
    justify-content: center;
    gap: 10px;
    padding: 20px 0;
    .nav-item {
      .nav-link {
        color: rgba(147, 147, 147, 1);
        background-color: rgba(147, 147, 147, 0.2);
        border: none;
        border-radius: 10px;
        padding: 14px;
        position: relative;
        font-size: 17px;
        &::before {
          position: absolute;
          content: '';
          width: calc(100% - 24px);
          height: 2px;
          background-color: $main-color;
          left: 12px;
          bottom: 10px;
          opacity: 0;
        }
        &.active {
          background-color: rgba(0, 167, 147, 0.2);
          color: $main-color;
          &::before {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
