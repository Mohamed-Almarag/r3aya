<template>
  <div class="thanks_for_registration pages_padding_top">
    <div class="container">
      <div class="title_wrapping">
        <SharedSectionTitle title="welcome yara"></SharedSectionTitle>
      </div>
      <p class="text">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit
      </p>
      <div class="button_wrapper">
        <SharedAppButton
          :isLink="true"
          :toRoute="localePath(`/user-profile`)"
          class=""
        >
          <template #link>
            <span>skip for now</span>
          </template>
        </SharedAppButton>

        <SharedAppButton
          :isLink="true"
          :toRoute="localePath(`/specific-questions`)"
        >
          <template #link>
            <span>answer questions</span>
          </template>
        </SharedAppButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Patient',
}
</script>

<style lang="scss" scoped>
.thanks_for_registration {
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .title_wrapping {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
  .text {
    text-align: center;
    margin-bottom: 15px;
  }
  .button_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
}
</style>
