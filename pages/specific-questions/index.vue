<template>
  <div class="specific_questions_wrapper pages_padding_top">
    <div class="container">
      <div class="all_questions_wrapper">
        <SharedSectionTitle
          title=" please answer the following questions"
          class="mb-4"
        ></SharedSectionTitle>
        <div class="question" v-for="question in questions" :key="question.id">
          <h6 class="title">{{ question.id }} - {{ question.title }}</h6>
          <div class="radio_container">
            <div>
              <input type="radio" id="yes" value="yes" />
              <label for="yes">yes</label>
            </div>
            <div>
              <input type="radio" id="no" value="no" />
              <label for="no">no</label>
            </div>
          </div>
          <textarea class="text_area" placeholder="Add comment"></textarea>
        </div>
        <div class="button_wrapper">
          <SharedAppButton class="change_width">
            <span>finish</span>
          </SharedAppButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpecificQuestions',
  data() {
    return {
      questions: [
        {
          id: 1,
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit ?',
        },
        {
          id: 2,
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit ?',
        },
        {
          id: 3,
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit ?',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.specific_questions_wrapper {
  .all_questions_wrapper {
    padding: $main-padding 0;
    .question {
      margin-bottom: 25px;
      .title {
        font-size: 20px;
        margin-bottom: 0;
      }
      .radio_container {
        margin: 15px 0;
      }
      .text_area {
        width: 100%;
        border: 1px solid $main-color;
        outline: none;
        min-height: 100px;
        padding: 10px;
      }
    }
    .button_wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
