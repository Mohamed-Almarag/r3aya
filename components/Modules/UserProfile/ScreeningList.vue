<template>
  <div class="main_examination_wrapper">
    <div class="all_examinations">
      <div class="every_examination">
        <div class="examination_name">
          <span>anxiety test</span>
        </div>
        <div class="file_name">
          <span>test result</span>
        </div>
        <div class="actions">
          <span>22/3/2022</span>
        </div>
      </div>
      <div class="every_examination">
        <div class="examination_name">
          <span>anxiety test</span>
        </div>
        <div class="file_name">
          <span>test result</span>
        </div>
        <div class="actions">
          <span>22/3/2022</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScreeningList',
}
</script>

<style lang="scss" scoped>
.main_examination_wrapper {
  border: 1px solid $placeholder-text-color;
  border-radius: 10px;
  padding: 30px 10px;
  .all_examinations {
    .every_examination {
      display: flex;
      justify-content: space-between;
      padding: 0 30px;
      .examination_name,
      .file_name {
        flex-grow: 1;
        border: 1px solid #93939399;
        text-align: center;
        padding: 20px;
      }
      .actions {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        // padding: 0 10px;

        border: 1px solid #93939399;
        flex-grow: 1;
      }
    }
  }
}
</style>
