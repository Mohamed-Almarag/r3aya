<template>
  <div class="main_clinics_wrapper">
    <div class="container">
      <div class="section_header" v-if="displayHeader">
        <SharedSectionTitle
          v-if="titleText"
          :title="titleText"
          :withBullets="bulletTitle"
        ></SharedSectionTitle>
        <SharedAppButton
          v-if="linkText"
          :isLink="true"
          :toRoute="localePath(`/${linkRoute}`)"
        >
          <template #link>
            <span> {{ linkText }}</span>
          </template>
        </SharedAppButton>
      </div>
      <div class="second_description text-capitalize" v-if="descriptionText">
        {{ descriptionText }}
      </div>
      <div class="cards_wrapper" v-if="!changeGridToTwo">
        <div class="row">
          <div class="col-md-3" v-for="(item, i) in items" :key="i">
            <div class="every_card">
              <div class="img_wrapper">
                <img
                  draggable="false"
                  class="d-block img"
                  :src="item.img_src"
                  :alt="item.title"
                />
              </div>
              <span class="d-block text-center text-capitalize mt-2 name">{{
                item.title
              }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Start Grid Tow Cards   -->
      <div class="cards_wrapper_container_two" v-if="changeGridToTwo">
        <div class="row">
          <div class="col-md-6" v-for="(item, i) in items" :key="i">
            <div class="every_card_item">
              <div class="item_img_wrapper">
                <img
                  draggable="false"
                  class="d-block item_img"
                  :src="item.img_src"
                  :alt="item.title"
                />
              </div>
              <div class="item_content">
                <h5 class="item_title">{{ item.title }}</h5>
                <p class="item_description">
                  {{ item.description }}
                </p>
                <div class="item_button">
                  <SharedAppButton
                    class="solid"
                    :isLink="true"
                    :toRoute="
                      localePath(`/services/wellness-programs/${item.id}`)
                    "
                  >
                    <template #link>
                      <span>know more</span>
                    </template>
                  </SharedAppButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Grid Tow Cards   -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClinicsSection',
  props: {
    items: {
      type: Array,
    },
    bulletTitle: {
      type: Boolean,
      default: false,
    },
    titleText: {
      type: String,
      default: '',
    },
    linkText: {
      type: String,
      default: '',
    },
    linkRoute: {
      type: String,
      default: '/',
    },
    descriptionText: {
      type: String,
      default: '',
    },
    changeGridToTwo: {
      type: Boolean,
      default: false,
    },
    displayHeader: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.main_clinics_wrapper {
  .section_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .cards_wrapper {
    .every_card {
      // padding: 5px;
      margin-bottom: 20px;
      .img_wrapper {
        .img {
          max-width: 100%;
        }
      }
    }
  }
  .second_description {
    margin-bottom: 15px;
  }
  .cards_wrapper_container_two {
    .every_card_item {
      display: flex;
      background-color: #e2f5f3;
      border-radius: 20px;
      padding: 20px;
      gap: 15px;
      margin-bottom: 20px;
      .item_content {
        .item_title {
          font-size: 18px;
        }
        .item_description {
          font-size: 14px;
          line-height: $line-height-text;
          margin: 10px 0;
        }
        .item_button {
          display: flex;
          justify-content: end;
        }
      }
    }
  }
}
</style>
