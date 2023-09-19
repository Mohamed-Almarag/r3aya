<template>
  <div class="main_register_page_wrapper pages_padding_top">
    <div class="container">
      <div class="title_wrapping">
        <SharedSectionTitle
          class="register_doctor_title"
          title="sign up as a doctor."
        ></SharedSectionTitle>
        <div class="switch_bullets text-capitalize">
          <div class="bullet_one">
            <div class="bullet_wrapper">
              <span class="bullet">1</span>
            </div>
            <span class="d-block text">basic information</span>
          </div>
          <div class="bullet_one">
            <div class="bullet_wrapper second" :class="{ switched: step == 2 }">
              <span class="bullet">2</span>
            </div>
            <span class="d-block text">certifications</span>
          </div>
        </div>
        <!-- Start Doctor Form -->
        <div class="doctor_form_wrapping">
          <form class="main_doctor_form">
            <!-- Start Form Basic Information -->
            <div class="form_basic_information" v-if="step == 1">
              <!-- Start Part One Image -->
              <div class="part_one_image">
                <div class="img_wrapper">
                  <img
                    class="img"
                    src="@/assets/images/auth/sign-up-doctor.png"
                    alt=""
                  />
                </div>
                <div class="custom_input">
                  <label class="input_label" for="upload_img"
                    >upload image</label
                  >
                  <input class="input_file" type="file" id="upload_img" />
                </div>
              </div>
              <!-- End Part One Image -->
              <!-- Start From Inputs -->
              <div class="row">
                <div class="main_input_wrapper mb-4 col-md-6">
                  <label class="main_label">first name</label>
                  <input
                    class="main_input"
                    type="text"
                    placeholder="name example"
                  />
                </div>
                <div class="main_input_wrapper mb-4 col-md-6">
                  <label class="main_label">last name</label>
                  <input
                    class="main_input"
                    type="text"
                    placeholder="name example"
                  />
                </div>
                <div class="main_input_wrapper mb-4 col-md-6">
                  <label class="main_label">e-mail</label>
                  <input
                    class="main_input"
                    type="email"
                    placeholder="user e-mail"
                  />
                </div>
                <div class="main_input_wrapper mb-4 col-md-6">
                  <label class="main_label">phone</label>
                  <input
                    class="main_input"
                    type="tel"
                    placeholder="00122588963355"
                  />
                </div>
                <div class="main_input_wrapper mb-4 col-md-6">
                  <label class="main_label">category</label>
                  <Multiselect
                    :options="categories"
                    track-by="category"
                    label="category"
                    placeholder="select category"
                  ></Multiselect>
                </div>
                <div class="main_input_wrapper mb-4 col-md-6">
                  <label class="main_label">your position</label>
                  <input
                    class="main_input"
                    type="text"
                    placeholder="Lorem ipsum dolor sit amet, co`m sociis natoque penatibus et magnis dis parturient montes,Lorem ipsum do"
                  />
                </div>
                <div class="main_input_wrapper mb-4 col-md-6">
                  <label class="main_label">time zone</label>
                  <input class="main_input" type="text" placeholder="example" />
                </div>
                <div class="main_input_wrapper mb-4 col-md-6">
                  <label class="main_label">country</label>
                  <input class="main_input" type="text" placeholder="example" />
                </div>
                <div class="main_input_wrapper mb-4 col-md-6">
                  <label class="main_label">password</label>
                  <input
                    class="main_input"
                    type="password"
                    placeholder="example"
                  />
                </div>
                <div class="main_input_wrapper mb-4 col-md-6">
                  <label class="main_label">reset password</label>
                  <input
                    class="main_input"
                    type="password"
                    placeholder="example"
                  />
                </div>
              </div>
              <!-- End From Inputs -->
            </div>
            <!-- End Form  Basic Information -->
            <!-- Start Certifications Information -->
            <div class="form_certifications_information" v-if="step == 2">
              <div class="certifications_header">
                <span class="text-capitalize title">certifications</span>
                <svg class="icon" @click="addNewCertificate">
                  <use xlink:href="~/static/sprite.svg#plus_icon"></use>
                </svg>
              </div>
              <div class="all_certifications">
                <div
                  class="row"
                  v-for="(cer, index) in all_certifications"
                  :key="index"
                >
                  <div class="main_input_wrapper mb-4 col-md-5">
                    <label class="main_label">graduated from</label>
                    <input
                      class="main_input"
                      type="text"
                      placeholder="enter faculty"
                      v-model="cer.graduated_from"
                    />
                  </div>
                  <div class="main_input_wrapper mb-4 col-md-5">
                    <label class="main_label">year of graduation</label>
                    <input
                      class="main_input"
                      type="text"
                      placeholder="choose year"
                      v-model="cer.year_of_graduation"
                    />
                  </div>
                  <div class="main_input_wrapper mb-4 col-md-2">
                    <label class="main_label">certification file</label>
                    <input
                      class="main_input"
                      type="text"
                      placeholder="yarawaheed.pdf"
                      v-model="cer.certification_file"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- End Certifications Information -->
          </form>
          <div class="button_wrapper d-flex justify-content-center mt-4">
            <SharedAppButton class="hero_solid" @click="switchToPartTwo(2)">
              <span>next step</span>
            </SharedAppButton>
          </div>
        </div>
        <!-- End Doctor Form Basic Information -->
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'
export default {
  name: 'RegisterDoctor',
  data() {
    return {
      categories: [
        {
          id: 1,
          category: 'category A',
        },
        {
          id: 2,
          category: 'category B',
        },
        {
          id: 3,
          category: 'category C',
        },
      ],
      step: 1,
      all_certifications: [
        {
          graduated_from: null,
          year_of_graduation: null,
          certification_file: null,
        },
      ],
    }
  },
  components: { Multiselect },
  methods: {
    switchToPartTwo(stepNumber) {
      this.step = stepNumber
    },
    addNewCertificate() {
      this.all_certifications.push({
        graduated_from: null,
        year_of_graduation: null,
        certification_file: null,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.main_register_page_wrapper {
  .title_wrapping {
    padding: $main-padding 30px;
    .register_doctor_title {
      display: flex;
      justify-content: center;
    }
    .switch_bullets {
      display: flex;
      justify-content: center;
      margin: 30px 0;
      .bullet_one {
        text-align: center;
        min-width: 350px;
        .bullet_wrapper {
          position: relative;
          &::before {
            position: absolute;
            content: '';
            height: 3px;
            width: 50%;
            background-color: $second-color;
            top: 50%;
            z-index: -1;
          }
          &.second {
            &::before {
              background-color: $black-color;
              right: 50%;
            }
            &.switched {
              &::before {
                background-color: $second-color;
              }
            }
          }
          .bullet {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background-color: $second-color;
            color: $white-color;
            display: flex !important;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            margin: 0 auto 10px;
          }
        }
        .text {
          font-weight: 600;
        }
      }
    }
  }
  // Start Form Style
  .doctor_form_wrapping {
    .main_doctor_form {
      .part_one_image {
        text-align: center;
        margin-bottom: 30px;
        .img_wrapper {
          .img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
          }
        }
        .custom_input {
          margin-top: 10px;
          .input_label {
            background-color: $main-color;
            color: $white-color;
            padding: 5px;
            border-radius: 5px;
            cursor: pointer;
          }
          .input_file {
            display: none;
          }
        }
      }
    }
  }
  // certifications
  .form_certifications_information {
    .certifications_header {
      display: flex;
      justify-content: space-between;
      padding-bottom: 20px;
      margin-bottom: 20px;
      border-bottom: 1px solid $placeholder-text-color;
      .title {
        font-weight: 600;
      }
      .icon {
        width: 24px;
        height: 24px;
        background-color: $second-color;
        fill: $white-color;
        padding: 5px;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }
}
</style>
