<template>
  <div class="main_examination_wrapper">
    <div class="all_examinations">
      <div class="every_examination">
        <div class="examination_name">
          <span>doc name</span>
        </div>
        <div class="file_name">
          <span>File Name</span>
        </div>
        <div class="actions">
          <SharedAppButton class="user_profile_icon">
            <svg class="icon">
              <use xlink:href="~/static/sprite.svg#download"></use>
            </svg>
            <span>download as pdf</span>
          </SharedAppButton>
          <SharedAppButton class="solid user_profile_icon">
            <svg class="icon">
              <use xlink:href="~/static/sprite.svg#share"></use>
            </svg>
            <span>share file</span>
          </SharedAppButton>
          <SharedAppButton class="delete user_profile_icon">
            <svg class="icon">
              <use xlink:href="~/static/sprite.svg#delete_icon"></use>
            </svg>
            <span>delete file</span>
          </SharedAppButton>
        </div>
      </div>
      <div class="every_examination">
        <div class="examination_name">
          <span>doc name</span>
        </div>
        <div class="file_name">
          <span>File Name</span>
        </div>
        <div class="actions">
          <SharedAppButton class="user_profile_icon">
            <svg class="icon">
              <use xlink:href="~/static/sprite.svg#download"></use>
            </svg>
            <span>download as pdf</span>
          </SharedAppButton>
          <SharedAppButton class="solid user_profile_icon">
            <svg class="icon">
              <use xlink:href="~/static/sprite.svg#share"></use>
            </svg>
            <span>share file</span>
          </SharedAppButton>
          <SharedAppButton class="delete user_profile_icon">
            <svg class="icon">
              <use xlink:href="~/static/sprite.svg#delete_icon"></use>
            </svg>
            <span>delete file</span>
          </SharedAppButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReportsList',
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
        border: 1px solid #93939399;
      }
    }
  }
}
</style>
