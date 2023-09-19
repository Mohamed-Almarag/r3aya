<template>
  <div class="user_profile_wrapper pages_padding_top">
    <div class="container">
      <div class="user_information_wrapper">
        <div class="user_info">
          <div class="main_information">
            <div class="image_points">
              <div class="wrapper_user">
                <img
                  class="img d-block"
                  src="@/assets/images/user/user.png"
                  alt="user img"
                />
                <div class="name_twitter">
                  <span class="d-block name text-capitalize">yara waheed</span>
                  <span class="d-block user_twitter">@yarawaheeeed</span>
                </div>
              </div>
              <button class="points">
                <img
                  class="img d-block"
                  src="@/assets/images/user/hand-stars.png"
                  alt="user img"
                />
                <div>
                  <span class="numbers d-block">670</span>
                  <span class="text-capitalize">points</span>
                </div>
              </button>
            </div>
            <div class="contacts_edit">
              <div class="email_phone">
                <div class="part">
                  <svg class="icon">
                    <use xlink:href="~/static/sprite.svg#check-email"></use>
                  </svg>
                  <span>example@gmail.com</span>
                </div>
                <div class="part">
                  <svg class="icon">
                    <use xlink:href="~/static/sprite.svg#phone"></use>
                  </svg>
                  <span>01234567825888</span>
                </div>
              </div>
              <SharedAppButton
                class="solid"
                :isLink="true"
                :toRoute="localePath(`/user-profile/7`)"
              >
                <template #link>
                  <span>edit profile</span>
                </template>
              </SharedAppButton>
            </div>
          </div>
          <div class="tabs_container">
            <button
              @click="switchTabs('activity')"
              class="for_tabs_button text-capitalize"
              :class="{ active: activeTab == 'activity' }"
            >
              activity
            </button>
            <button
              @click="switchTabs('history')"
              class="for_tabs_button text-capitalize"
              :class="{ active: activeTab == 'history' }"
            >
              history
            </button>
            <button
              @click="switchTabs('examination')"
              class="for_tabs_button text-capitalize"
              :class="{ active: activeTab == 'examination' }"
            >
              Examination
            </button>
            <button
              @click="switchTabs('report')"
              class="for_tabs_button text-capitalize"
              :class="{ active: activeTab == 'report' }"
            >
              report
            </button>
            <button
              @click="switchTabs('screening')"
              class="for_tabs_button text-capitalize"
              :class="{ active: activeTab == 'screening' }"
            >
              screening
            </button>
            <button
              @click="switchTabs('appointments')"
              class="for_tabs_button text-capitalize"
              :class="{ active: activeTab == 'appointments' }"
            >
              appointments
            </button>
            <button
              @click="switchTabs('likes')"
              class="for_tabs_button text-capitalize"
              :class="{ active: activeTab == 'likes' }"
            >
              likes
            </button>
          </div>
        </div>
      </div>
      <div class="all_sections_wrapper">
        <ModulesUserProfileActivityList
          v-if="activeTab == 'activity'"
        ></ModulesUserProfileActivityList>
        <ModulesUserProfileHistoryList
          v-if="activeTab == 'history'"
        ></ModulesUserProfileHistoryList>
        <ModulesUserProfileExaminationList
          v-if="activeTab == 'examination'"
        ></ModulesUserProfileExaminationList>
        <ModulesUserProfileReportsList
          v-if="activeTab == 'report'"
        ></ModulesUserProfileReportsList>
        <ModulesUserProfileScreeningList
          v-if="activeTab == 'screening'"
        ></ModulesUserProfileScreeningList>
        <ModulesUserProfileAppointmentsList
          v-if="activeTab == 'appointments'"
        ></ModulesUserProfileAppointmentsList>
        <ModulesUserProfileLikesList
          v-if="activeTab == 'likes'"
        ></ModulesUserProfileLikesList>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data() {
    return {
      activeTab: 'examination',
    }
  },
  methods: {
    switchTabs(tabValue) {
      this.activeTab = tabValue
    },
  },
}
</script>

<style lang="scss" scoped>
.user_profile_wrapper {
  .user_information_wrapper {
    padding: $main-padding 0;
    .user_info {
      padding: 10px 10px 0 20px;
      box-shadow: 0px 4px 4px 0px #00000040;
      border-radius: 10px;
      border: 1px solid #93939399;
      .main_information {
        .image_points {
          display: flex;
          justify-content: space-between;
          .wrapper_user {
            display: flex;
            align-items: center;
            gap: 30px;
            margin-top: 30px;
            .img {
              width: 142px;
              height: 142px;
              border-radius: 50%;
              border: 1px solid $second-color;
            }
            .name_twitter {
              .name {
                font-size: 20px;
                margin-bottom: 5px;
              }
            }
          }
          .points {
            border: none;
            border-radius: 10px;
            background-color: $main-color;
            box-shadow: none;
            color: $white-color;
            display: flex;
            height: fit-content;
            padding: 10px 20px;
            min-height: 100px;
            min-width: 180px;
            align-items: center;
            justify-content: center;
            gap: 10px;
            .img {
              height: 50px;
              width: 50px;
            }
            .numbers {
              font-weight: 600;
              font-size: 24px;
            }
          }
        }
        .contacts_edit {
          display: flex;
          justify-content: space-between;
          padding-left: 172px;
          .email_phone {
            display: flex;
            gap: 40px;
            .part {
              display: flex;
              align-items: center;
              gap: 5px;
              .icon {
                width: 17px;
                height: 17px;
                fill: $main-color;
              }
            }
          }
        }
      }
      .tabs_container {
        border-top: 1px solid #93939366;
        display: flex;
        gap: 15px;
        margin-top: 20px;
        .for_tabs_button {
          position: relative;
          border: none;
          background: none;
          padding: 10px;
          &::before {
            position: absolute;
            content: '';
            left: 0;
            bottom: 0;
            height: 2px;
            width: 80%;
            background-color: transparent;
          }
          &.active {
            &::before {
              background-color: $second-color;
            }
          }
        }
      }
    }
  }
  .all_sections_wrapper {
    padding: 0 0 $main-padding;
  }
}
</style>
