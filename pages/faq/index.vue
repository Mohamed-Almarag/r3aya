<template>
  <div class="faq_questions_page">
    <ModulesFaqQuestionsSection
      :withButton="false"
      :items="items"
    ></ModulesFaqQuestionsSection>
  </div>
</template>

<script>
export default {
  name: 'FAQ',
  data() {
    return {
      items: [
        {
          id: 1,
          text: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet ?',
          questions: 'questions',
        },
        {
          id: 2,
          text: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet ?',
          questions: 'questions2',
        },
        {
          id: 3,
          text: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet ?',
          questions: 'questions3',
        },
        {
          id: 4,
          text: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet ?',
          questions: 'questions3',
        },
        {
          id: 5,
          text: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet ?',
          questions: 'questions3',
        },
        {
          id: 6,
          text: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet ?',
          questions: 'questions3',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.faq_questions_page {
  padding: $main-padding 0;
}
</style>
