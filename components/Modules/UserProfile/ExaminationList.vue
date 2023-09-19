<template>
  <div class="main_examination_wrapper">
    <div class="all_examinations">
      <SharedSectionTitle title="doctor name" class="mb-3"></SharedSectionTitle>
      <div class="every_examination">
        <div class="examination_name">
          <span>Examination Name</span>
        </div>
        <div class="file_name">
          <span>File Name</span>
        </div>
        <div class="actions">
          <SharedAppButton class="solid">
            <span>change file</span>
          </SharedAppButton>
          <svg class="icon">
            <use xlink:href="~/static/sprite.svg#delete_icon"></use>
          </svg>
        </div>
      </div>
      <div class="every_examination">
        <div class="examination_name">
          <span>Examination Name</span>
        </div>
        <div class="file_name">
          <span>File Name</span>
        </div>
        <div class="actions">
          <SharedAppButton>
            <span>upload file</span>
          </SharedAppButton>
          <svg class="icon">
            <use xlink:href="~/static/sprite.svg#delete_icon"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExaminationList',
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
        padding: 0 10px;
        min-width: 200px;
        .icon {
          width: 40px;
          height: 40px;
          background-color: $delete-color;
          fill: $white-color;
          padding: 10px;
          border-radius: 5px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
