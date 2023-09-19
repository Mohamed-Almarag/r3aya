<template>
  <div class="main_edit_profile_data pages_padding_top">
    <div class="container">
      <div class="user_data_container">
        <!-- Start Form -->
        <form>
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
              <label class="main_label">username</label>
              <input class="main_input" type="text" placeholder="example" />
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
              <label class="main_label">category</label>
              <Multiselect
                :options="categories"
                track-by="category"
                label="category"
                placeholder="select category"
              ></Multiselect>
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
              <label class="main_label">time zone</label>
              <input class="main_input" type="text" placeholder="example" />
            </div>
            <div class="main_input_wrapper mb-4 col-md-6">
              <label class="main_label">gender</label>
              <Multiselect
                :options="genders"
                label="gender"
                track-by="gender"
                placeholder="select gender"
              ></Multiselect>
            </div>
            <div class="main_input_wrapper mb-4 col-md-6">
              <label class="main_label">Age</label>
              <input class="main_input" type="text" placeholder="example" />
            </div>
          </div>
          <div class="button_wrapper mt-4">
            <SharedAppButton>
              <span>save changes</span>
            </SharedAppButton>
            <SharedAppButton class="solid">
              <span>discard</span>
            </SharedAppButton>
          </div>
        </form>
        <!-- End Form -->
        <!-- Start Password Form -->
        <div class="user_password_container">
          <div class="password_title">
            <span>change password</span>
          </div>
          <form>
            <div class="row">
              <div class="main_input_wrapper mb-4 col-md-6">
                <label class="main_label">password</label>
                <input class="main_input" type="text" placeholder="********" />
              </div>
              <div class="main_input_wrapper mb-4 col-md-6">
                <label class="main_label">reset password</label>
                <input class="main_input" type="text" placeholder="********" />
              </div>
            </div>
            <div class="button_wrapper mt-4">
              <SharedAppButton>
                <span>save changes</span>
              </SharedAppButton>
              <SharedAppButton class="solid">
                <span>discard</span>
              </SharedAppButton>
            </div>
          </form>
        </div>
        <!-- End Password Form -->
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'
export default {
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
      genders: [
        {
          id: 1,
          gender: 'Male',
        },
        {
          id: 2,
          gender: 'Female',
        },
      ],
    }
  },
  components: { Multiselect },
}
</script>

<style lang="scss" scoped>
.main_edit_profile_data {
  .user_data_container {
    padding: $main-padding 0;
    .user_password_container {
      margin-top: 50px;
      .password_title {
        background-color: $third-color;
        color: $black-color;
        text-transform: capitalize;
        font-size: 18px;
        border-radius: 5px;
        line-height: $line-height-text;
        padding: 10px;
        margin-bottom: 20px;
      }
    }
    .button_wrapper {
      display: flex;
      justify-content: center;
      gap: 30px;
    }
  }
}
</style>
