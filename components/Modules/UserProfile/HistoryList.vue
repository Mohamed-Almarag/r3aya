<template>
  <div class="main_history_wrapper">
    <!-- Start Accordion  -->
    <div class="accordion" role="tablist">
      <client-only>
        <div v-for="item in items" v-bind:key="item.id">
          <b-card no-body class="">
            <b-card-header header-tag="header" role="tab">
              <b-button
                class="tabs_button"
                v-b-toggle="'accordion-' + item.id"
                role="button"
                show
              >
                <span class="d-block">{{ item.text }}</span>
                <svg class="icon arrow_up">
                  <use
                    xlink:href="~/static/sprite.svg#accordion_arrow_up"
                  ></use>
                </svg>
                <svg class="icon arrow_down">
                  <use
                    xlink:href="~/static/sprite.svg#accordion_arrow_down"
                  ></use>
                </svg>
              </b-button>
            </b-card-header>
            <b-collapse
              accordion="my-accordion"
              role="tabpanel"
              :id="'accordion-' + item.id"
            >
              <b-card-body class="card_body">
                <b-card-text>
                  <div class="all_questions">
                    <div
                      class="every_question"
                      v-for="question in item.questions"
                      :key="question.id"
                    >
                      <h6 class="title">
                        {{ question.id }} - {{ question.ask }}
                      </h6>
                      <div class="radio_container">
                        <div v-for="item in question.options" :key="item.id">
                          <input
                            type="radio"
                            :id="item.id"
                            :value="item.option"
                          />
                          <label :for="item.id">{{ item.option }}</label>
                        </div>
                      </div>
                      <div class="main_input_wrapper mt-3">
                        <textarea
                          class="main_input with_textarea with_border"
                        ></textarea>
                      </div>
                    </div>
                    <div class="button_wrapper">
                      <SharedAppButton class="solid">
                        <span>save changes</span>
                      </SharedAppButton>
                    </div>
                  </div>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </client-only>
    </div>
    <!-- End Accordion  -->
  </div>
</template>

<script>
export default {
  name: 'HistoryList',
  data() {
    return {
      items: [
        {
          id: 1,
          text: 'general questions',
          questions: [
            {
              id: 1,
              ask: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit ?',
              options: [
                {
                  id: 1,
                  option:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo s ligula eget dolor. Aenean massa',
                },
                {
                  id: 2,
                  option:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo s ligula eget dolor. Aenean massa',
                },
                {
                  id: 3,
                  option:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo s ligul',
                },
                {
                  id: 4,
                  option:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo s ligula eget dolor. Aenean massa',
                },
                {
                  id: 5,
                  option:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo s ligul',
                },
              ],
            },
            {
              id: 2,
              ask: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit ?',
              options: [
                {
                  id: 1,
                  option:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo s ligula eget dolor. Aenean massa',
                },
                {
                  id: 2,
                  option:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo s ligula eget dolor. Aenean massa',
                },
                {
                  id: 3,
                  option:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo s ligul',
                },
                {
                  id: 4,
                  option:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo s ligula eget dolor. Aenean massa',
                },
                {
                  id: 5,
                  option:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo s ligul',
                },
              ],
            },
            {
              id: 3,
              ask: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit ?',
              options: [
                {
                  id: 1,
                  option:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo s ligula eget dolor. Aenean massa',
                },
                {
                  id: 2,
                  option:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo s ligula eget dolor. Aenean massa',
                },
                {
                  id: 3,
                  option:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo s ligul',
                },
                {
                  id: 4,
                  option:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo s ligula eget dolor. Aenean massa',
                },
                {
                  id: 5,
                  option:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo s ligul',
                },
              ],
            },
          ],
        },
        {
          id: 2,
          text: 'doctor’s basma soliman  questions',
          questions: [
            {
              id: 1,
              ask: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit ?',
              options: [
                {
                  id: 1,
                  option:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo s ligula eget dolor. Aenean massa',
                },
                {
                  id: 2,
                  option:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo s ligula eget dolor. Aenean massa',
                },
                {
                  id: 3,
                  option:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo s ligul',
                },
                {
                  id: 4,
                  option:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo s ligula eget dolor. Aenean massa',
                },
                {
                  id: 5,
                  option:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo s ligul',
                },
              ],
            },
          ],
        },
        {
          id: 3,
          text: 'doctor’s yara waheed  questions',
          questions: [
            {
              id: 1,
              ask: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit ?',
              options: [
                {
                  id: 1,
                  option:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo s ligula eget dolor. Aenean massa',
                },
                {
                  id: 2,
                  option:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo s ligula eget dolor. Aenean massa',
                },
                {
                  id: 3,
                  option:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo s ligul',
                },
                {
                  id: 4,
                  option:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo s ligula eget dolor. Aenean massa',
                },
                {
                  id: 5,
                  option:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo s ligul',
                },
              ],
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.main_history_wrapper {
  .card {
    border: none;
    border-radius: 0;
  }
  .accordion {
    .card-header {
      padding: 0;
      border: none;
      margin-bottom: 30px;
    }
    .tabs_button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      border: none;
      border-radius: 5px;
      box-shadow: none;
      background-color: $third-color;
      color: $black-color;
      text-transform: capitalize;
      font-size: 18px;
      line-height: $line-height-text;
      &:focus {
        box-shadow: none;
      }
      .icon {
        width: 15px;
        height: 15px;
      }
      &.not-collapsed {
        .arrow_down {
          display: none;
        }
        .arrow_up {
          display: block;
        }
      }
      &.collapsed {
        .arrow_down {
          display: block;
        }
        .arrow_up {
          display: none;
        }
      }
    }
  }

  .all_questions {
    .every_question {
      margin-bottom: 30px;
      .title {
        font-size: 18px;
        margin-bottom: 20px;
      }
    }
    .button_wrapper {
      display: flex;
      justify-content: end;
      margin-bottom: 30px;
    }
  }
}
</style>
